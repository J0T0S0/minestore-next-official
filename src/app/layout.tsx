import './globals.css';
import { getEndpoints } from '@/api';
import { fetcher } from '@/api/server/fetcher';

import type { Metadata } from 'next';
import { App } from './app';
import 'react-quill-new/dist/quill.snow.css';

const { getSettings } = getEndpoints(fetcher);

export const generateMetadata = async (): Promise<Metadata> => {
    try {
        const { website_description } = await getSettings();

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
