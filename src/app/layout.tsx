import './globals.css';
import { getEndpoints } from '@/api';
import { fetcher } from '@/api/server/fetcher';

import type { Metadata, Viewport } from 'next';
import { App } from './app';
import 'react-quill-new/dist/quill.snow.css';
import { readFileSync } from 'fs';
import { extractConfigValue } from '@helpers/extract-config-value';
import { Config } from '@/app/providers/config-provider';

const { getSettings } = getEndpoints(fetcher);

const configFile = readFileSync(process.cwd() + '/config.json', 'utf8');
const configData = JSON.parse(configFile) as Config;
const themeColor = extractConfigValue('main-color', configData) || '#2B2B2BFF';

export function generateViewport(): Viewport {
    return {
        themeColor
    };
}

export const generateMetadata = async (): Promise<Metadata> => {
    try {
        const { website_name, website_description } = await getSettings();

        return {
            title: 'Quantum Craft',
            description: `${website_description}`,
            icons: {
                icon: '/assets/imgs/main/logo_short.png'
            },
            openGraph: {
                images: [{ url: `${process.env.NEXT_PUBLIC_API_URL}/img/banner.png` }]
            },
            applicationName: 'Quantum Craft',
            metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}`)
        };
    } catch (e) {
        return {
            title: 'Quantum Craft',
            description: `${process.env.NEXT_PUBLIC_WEBSTORE_DESCRIPTION}`,
            icons: {
                icon: '/assets/imgs/main/logo_short.png'
            },
            applicationName: 'Quantum Craft',
            metadataBase: new URL(`${process.env.NEXT_PUBLIC_API_URL}`)
        };
    }
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="bg-background text-foreground/70">
                <App>{children}</App>
            </body>
        </html>
    );
}
