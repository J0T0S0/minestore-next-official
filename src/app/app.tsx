import { getEndpoints } from '@/api';
import { fetcher } from '@/api/server/fetcher';
import { AuthProvider } from '@/core/auth/auth-provider';
import { LocaleProvider } from '@/core/i18n/locale-provider';
import { FC, PropsWithChildren, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { getDictionary } from '@/core/i18n';
import { Container } from '@/components/base/container/container';
import { Header } from '@layout/header/header';
import { Init } from '@/core/init/init';
import { Footer } from '@layout/footer/footer';
import { promises as fs } from 'fs';
import { ConfigProvider } from './providers/config-provider';
import { ThemeProvider } from './providers/theme-provider';
import { extractConfigValue } from '@helpers/extract-config-value';
import { langStorage } from '@helpers/lang-storage';
import { AnalyticsTracker } from '@/components/analytics';
import { FloatingCartButton } from '@/components/layout/floating-cart/floating-cart-button';

const { getUser, getSettings } = getEndpoints(fetcher);

export const App: FC<PropsWithChildren> = async ({ children }) => {
    const settings = await getSettings();
    const user = await getUser().catch(() => undefined);

    const messages = await getDictionary(langStorage.get() || 'en');

    const file = await fs.readFile(process.cwd() + '/config.json', 'utf8');
    const data = JSON.parse(file);

    const defaultTheme = extractConfigValue('theme', data) || ('system' as string);
    const particles = extractConfigValue('particles', data) || ('Enabled' as string);

    const systemLanguage = settings.system_language.code || 'en';

    return (
        <ConfigProvider config={data}>
            <ThemeProvider
                attribute="class"
                defaultTheme={defaultTheme}
                enableSystem
                disableTransitionOnChange
            >
                <AuthProvider initialUser={user}>
                    <LocaleProvider initialMessages={messages} systemLanguage={systemLanguage}>
                        <Suspense>
                            <Header settings={settings} particles={particles} />
                            <Container className="mt-4 flex-col items-center justify-center">
                                <main className="w-full max-w-6xl overflow-visible">
                                    {children}
                                </main>
                            </Container>
                            <Footer settings={settings} />
                            <Init settings={settings} />
                            <AnalyticsTracker />
                            <FloatingCartButton />
                            <Toaster position="top-right" reverseOrder={false} />
                        </Suspense>
                    </LocaleProvider>
                </AuthProvider>
            </ThemeProvider>
        </ConfigProvider>
    );
};
