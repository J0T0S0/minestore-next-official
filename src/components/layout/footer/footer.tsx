'use client';

import { FC, useEffect, useState } from 'react';
import { TSettings } from '@/types/settings';
import { usePathname } from 'next/navigation';
import { Mail, Globe, Twitter, Instagram } from 'lucide-react';
import Link from 'next/link';
import { getEndpoints } from '@/api';
import { fetcher } from '@/api/client/fetcher';

const { getServerOnline } = getEndpoints(fetcher);

export type FooterProps = {
    settings: TSettings;
};

export const Footer: FC<FooterProps> = ({ settings }) => {
    const pathname = usePathname();
    const [onlinePlayers, setOnlinePlayers] = useState<number>(0);

    useEffect(() => {
        if (settings.default_server_ip) {
            const [ip, port] = settings.default_server_ip.split(':');
            getServerOnline(ip, port || '25565')
                .then((data) => setOnlinePlayers(data.onlinePlayers))
                .catch(() => setOnlinePlayers(0));
        }
    }, [settings.default_server_ip]);

    // Hide footer on category pages
    if (pathname.includes('/categories/')) {
        return null;
    }

    return (
        <div className="border-t border-primary/20 bg-gradient-to-r from-[#1a0d3a] to-[#2d1556]">
            <div className="mx-auto max-w-7xl px-8 py-16">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    {/* Left Section - Description */}
                    <div className="flex flex-col justify-center">
                        <p className="text-lg leading-relaxed text-gray-200">
                            The cosmic void has never been more alive. Discover new crystal biomes,
                            unlock powerful artifacts, and experience skyblock like never before.
                            This major update brings revolutionary gameplay mechanics that will
                            transform your island into a galactic powerhouse.
                        </p>
                        <p className="mt-4 text-sm uppercase tracking-wider text-purple-300">
                            WE ARE NOT AFFILIATED WITH MOJANG, AB.
                        </p>
                        <p className="mt-2 text-sm font-semibold text-purple-200">
                            © 2026 {settings.website_name} - ALL RIGHTS RESERVED
                        </p>
                    </div>

                    {/* Right Section - Online Players & Social */}
                    <div className="flex flex-col items-end justify-between">
                        {/* Online Players */}
                        <div className="mb-8 flex items-center justify-center gap-3 rounded-full border border-purple-400/30 bg-purple-900/50 px-5 py-3">
                            <svg
                                className="block h-7 w-7 shrink-0 self-center overflow-visible text-purple-200"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 3v9m0 0H9m3 0h3m6-9a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <p className="text-base font-semibold leading-none text-purple-50">
                                Play with{' '}
                                <span className="text-xl font-bold text-purple-100">
                                    {onlinePlayers}
                                </span>{' '}
                                voyagers online
                            </p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            <Link
                                href={settings.socials?.twitter || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-900/50 text-purple-200 transition-colors hover:bg-primary hover:text-white"
                            >
                                <Twitter size={20} />
                            </Link>
                            <Link
                                href={
                                    settings.socials?.email
                                        ? `mailto:${settings.socials.email}`
                                        : '#'
                                }
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-900/50 text-purple-200 transition-colors hover:bg-primary hover:text-white"
                            >
                                <Mail size={20} />
                            </Link>
                            <Link
                                href={settings.socials?.instagram || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-900/50 text-purple-200 transition-colors hover:bg-primary hover:text-white"
                            >
                                <Instagram size={20} />
                            </Link>
                            <Link
                                href={settings.socials?.discord || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-900/50 text-purple-200 transition-colors hover:bg-primary hover:text-white"
                            >
                                <Globe size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
