'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

type CategoryHeaderProps = {
    title: string;
};

export function CategoryHeader({ title }: CategoryHeaderProps) {
    const router = useRouter();

    return (
        <div className="flex w-full items-center justify-between rounded-lg border-2 border-primary bg-gradient-to-r from-[#1a0d3a] to-[#2d1556] px-6 py-4">
            <button
                onClick={() => router.back()}
                className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-red-500 text-white transition-colors hover:bg-red-600"
                aria-label="Go back"
            >
                <ArrowLeft size={24} />
            </button>
            <h1 className="flex-1 text-center text-3xl font-bold text-white">{title}</h1>
            <div className="w-12"></div>
        </div>
    );
}
