import { ReactNode, Suspense } from 'react';
import { CategoryHeader } from './category-header';
import { SkeletonCategory } from './skeleton-category';

type CategoryPageWrapperProps = {
    title: string;
    children: ReactNode;
};

export function CategoryPageWrapper({ title, children }: CategoryPageWrapperProps) {
    return (
        <div className="w-full flex-col rounded-[10px]">
            <CategoryHeader title={title} />
            <div className="mt-6 bg-card">
                <Suspense fallback={<SkeletonCategory />}>{children}</Suspense>
            </div>
        </div>
    );
}
