import { PropsWithChildren } from 'react';
import { Container } from '@/components/base/container/container';

export const metadata = {
    title: 'Categories',
    description: 'Browse our store categories'
};

export default function CategoriesLayout({ children }: PropsWithChildren) {
    return (
        <Container className="mt-4 flex-col items-center justify-center">
            <main className="w-full max-w-6xl overflow-x-auto">{children}</main>
        </Container>
    );
}
