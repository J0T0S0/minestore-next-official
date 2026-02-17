'use client';

import { X } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useUser } from '@/hooks/use-user';
import { useEffect } from 'react';

type CartModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const authFormSchema = z.object({
    username: z
        .string({
            invalid_type_error: 'Invalid Username'
        })
        .regex(/^([*_BP\.]{0,1}[a-zA-Z0-9_]{3,24}(-[a-zA-Z0-9_]{1,24})?)$/, {
            message: 'Invalid Username'
        })
});

type AuthFormValues = z.infer<typeof authFormSchema>;

export function CartModal({ isOpen, onClose }: CartModalProps) {
    const [edition, setEdition] = useState<'java' | 'bedrock'>('java');
    const [step, setStep] = useState(0);
    const { loginAttemptInGame, loginInGame, loading } = useUser();

    const form = useForm<AuthFormValues>({
        resolver: zodResolver(authFormSchema),
        defaultValues: { username: '' },
        mode: 'onSubmit'
    });

    async function onSubmit(data: AuthFormValues) {
        const { username } = data;
        try {
            const response = await loginAttemptInGame(username);
            if (response?.status) {
                setStep(1);
            }
        } catch (error) {
            console.error('Error while logging in game:', error);
        }
    }

    useEffect(() => {
        if (step === 1) {
            const timer = setInterval(async () => {
                const response = await loginInGame(form.getValues('username'));
                if (response?.status) {
                    clearInterval(timer);
                    onClose();
                }
            }, 5000);
            return () => clearInterval(timer);
        }
    }, [step, loginInGame, form, onClose]);

    if (!isOpen) return null;

    if (step === 1) {
        return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
                <div className="relative w-full max-w-2xl rounded-2xl bg-[#0a2435] p-8">
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500 text-white transition-colors hover:bg-red-600"
                        aria-label="Close"
                    >
                        <X size={24} />
                    </button>

                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-white">Waiting for verification</h2>
                        <p className="mx-auto mt-4 max-w-[80ch] text-white/80">
                            <span className="font-bold">Check your game</span> and confirm the login
                        </p>
                        <div className="my-8 flex items-center justify-center space-x-2">
                            <div className="h-8 w-8 animate-bounce rounded-full bg-purple-500 [animation-delay:-0.3s]"></div>
                            <div className="h-8 w-8 animate-bounce rounded-full bg-purple-500 [animation-delay:-0.15s]"></div>
                            <div className="h-8 w-8 animate-bounce rounded-full bg-purple-500"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl rounded-2xl bg-[#0a2435] p-8">
                <button
                    onClick={onClose}
                    className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-500 text-white transition-colors hover:bg-red-600"
                    aria-label="Close"
                >
                    <X size={24} />
                </button>

                <div className="flex flex-col gap-8">
                    {/* Edition Selector */}
                    <div className="flex gap-4">
                        <button
                            onClick={() => setEdition('java')}
                            className={`flex flex-1 flex-col items-center justify-center rounded-2xl p-6 transition-all ${
                                edition === 'java'
                                    ? 'bg-gradient-to-br from-red-400 to-red-500 shadow-lg'
                                    : 'bg-red-400/50 hover:bg-red-400/70'
                            }`}
                        >
                            <span className="text-2xl font-bold text-white">Java Edition</span>
                            <span className="mt-2 text-sm text-white/90">Windows & MacOs</span>
                        </button>
                        <button
                            onClick={() => setEdition('bedrock')}
                            className={`flex flex-1 flex-col items-center justify-center rounded-2xl p-6 transition-all ${
                                edition === 'bedrock'
                                    ? 'bg-gradient-to-br from-purple-500 to-purple-600 shadow-lg'
                                    : 'bg-purple-500/50 hover:bg-purple-500/70'
                            }`}
                        >
                            <span className="text-2xl font-bold text-white">Bedrock Edition</span>
                            <span className="mt-2 text-sm text-white/90">
                                Xbox, PlayStation, Switch, Mobile
                            </span>
                        </button>
                    </div>

                    {/* Username Form */}
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
                        <div className="flex flex-col gap-3">
                            <h3 className="text-center text-2xl font-bold text-white">
                                Enter your {edition === 'java' ? 'Java' : 'Bedrock'} username
                            </h3>
                            <input
                                {...form.register('username')}
                                type="text"
                                placeholder="Enter username..."
                                className="rounded-lg border-2 border-cyan-600/30 bg-[#1a3a52] px-6 py-4 text-lg text-white placeholder-white/40 focus:border-cyan-600 focus:outline-none"
                            />
                            {form.formState.errors.username && (
                                <p className="text-sm text-red-400">
                                    {form.formState.errors.username.message}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={!form.formState.isValid || loading}
                            className="rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 px-8 py-4 text-xl font-bold text-gray-900 transition-all hover:from-yellow-500 hover:to-yellow-600 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {loading ? 'LOGGING IN...' : 'LOGIN'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
