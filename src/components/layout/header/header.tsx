'use client';

import { FC, useEffect, useState } from 'react';
import { Gift } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { TSettings } from '@/types/settings';
import { useConfig } from '@/app/providers/config-provider';
import { extractConfigValue } from '@/helpers/extract-config-value';

type HeaderProps = {
    settings: TSettings;
    particles: string;
};

export const Header: FC<HeaderProps> = ({ settings, particles }) => {
    const config = useConfig();
    const [now, setNow] = useState(() => new Date());

    useEffect(() => {
        const interval = setInterval(() => setNow(new Date()), 60000);
        return () => clearInterval(interval);
    }, []);

    const isEnabled = extractConfigValue('promo-enabled', config) !== 'Disabled';
    const title = extractConfigValue('promo-title', config);
    const subtitle = extractConfigValue('promo-subtitle', config);
    const startValue = extractConfigValue('promo-start', config);
    const endValue = extractConfigValue('promo-end', config);
    const startAt = startValue ? new Date(startValue) : null;
    const endAt = endValue ? new Date(endValue) : null;

    const hasValidStart = Boolean(startAt && !Number.isNaN(startAt.getTime()));
    const hasValidEnd = Boolean(endAt && !Number.isNaN(endAt.getTime()));
    const isBeforeStart = hasValidStart && startAt && now < startAt;
    const isAfterEnd = hasValidEnd && endAt && now >= endAt;

    if (!isEnabled || isBeforeStart || isAfterEnd) {
        return null;
    }

    const remainingMs = hasValidEnd && endAt ? Math.max(endAt.getTime() - now.getTime(), 0) : 0;
    const totalMinutes = Math.floor(remainingMs / 60000);
    const days = Math.floor(totalMinutes / (60 * 24));
    const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
    const minutes = totalMinutes % 60;

    return (
        <header className="relative">
            <div className="fixed inset-x-0 top-0 z-50">
                <nav className="grid h-[85px] w-screen grid-cols-5 items-center rounded-b-[20px] bg-white/10 px-8 text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-[30px]">
                    <Link
                        href="#"
                        className="text-center text-sm font-semibold uppercase tracking-[0.3em] transition-colors hover:text-white/80"
                    >
                        Discord
                    </Link>
                    <Link
                        href="/categories"
                        className="text-center text-sm font-semibold uppercase tracking-[0.3em] transition-colors hover:text-white/80"
                    >
                        Store
                    </Link>

                    <div className="flex items-center justify-center">
                        <Image
                            src="/assets/imgs/main/logo.png"
                            alt="QuantumCraft"
                            width={220}
                            height={88}
                            className="h-10 w-auto"
                            priority
                        />
                    </div>

                    <Link
                        href="#"
                        className="text-center text-sm font-semibold uppercase tracking-[0.3em] transition-colors hover:text-white/80"
                    >
                        Wiki
                    </Link>
                    <Link
                        href="#"
                        className="text-center text-sm font-semibold uppercase tracking-[0.3em] transition-colors hover:text-white/80"
                    >
                        Rules
                    </Link>
                </nav>
            </div>

            <div className="h-[85px]" />

            <div className="px-4 pt-4">
                <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 rounded-2xl bg-gradient-to-r from-[#f47bb9] via-[#f06aaa] to-[#e5599b] px-6 py-4 text-white shadow-[0_10px_30px_rgba(240,106,170,0.35)]">
                    <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                            <Gift className="h-6 w-6" />
                        </div>
                        <div className="leading-tight">
                            <p className="text-lg font-extrabold uppercase tracking-wide md:text-xl">
                                {title}
                            </p>
                            <p className="text-sm text-white/90 md:text-base">{subtitle}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 text-center">
                        <div>
                            <p className="text-2xl font-extrabold text-yellow-200 md:text-3xl">
                                {days}
                            </p>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-yellow-100">
                                Days
                            </p>
                        </div>
                        <span className="text-2xl font-bold text-white/90">:</span>
                        <div>
                            <p className="text-2xl font-extrabold text-yellow-200 md:text-3xl">
                                {hours}
                            </p>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-yellow-100">
                                Hours
                            </p>
                        </div>
                        <span className="text-2xl font-bold text-white/90">:</span>
                        <div>
                            <p className="text-2xl font-extrabold text-yellow-200 md:text-3xl">
                                {minutes}
                            </p>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-yellow-100">
                                Minutes
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
