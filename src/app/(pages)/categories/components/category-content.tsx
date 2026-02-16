import { TCategory, TSubCategory } from '@/types/category-details';
import { TItem } from '@/types/item';
import { joinClasses } from '@helpers/join-classes';
import { Card } from '@layout/card/card';
import { Comparison } from '../comparison/comparasion';
import { StackedCategory } from '../stacked/stacked-category';
import { FlipCard } from './flip-card';

type CategoryContentProps = {
    category: TCategory;
    items: TItem[];
    subCategory?: TSubCategory;
};

export function CategoryContent({ category, items, subCategory }: CategoryContentProps) {
    const categoryItems = subCategory?.items || items;

    const isComparison = subCategory?.category.is_comparison || category.is_comparison;
    const isStacked = subCategory?.category.is_stacked || category.is_stacked;
    const categoryListing = !!(subCategory?.category.is_listing || category.is_listing);

    return (
        <>
            {isComparison ? (
                <Comparison
                    categoryItems={categoryItems}
                    category={category}
                    subCategory={subCategory}
                />
            ) : isStacked ? (
                <StackedCategory items={categoryItems} />
            ) : categoryListing ? (
                <ProductListContainer items={categoryItems} isListing={true} />
            ) : (
                <FlipCardContainer items={categoryItems} />
            )}
        </>
    );
}

function ProductListContainer({ items, isListing }: { items: TItem[]; isListing: boolean }) {
    const gridClasses = joinClasses('grid gap-4 p-4', {
        'grid-cols-[repeat(auto-fill,minmax(min(16rem,100%),1fr))]': !isListing
    });

    return (
        <div className={gridClasses}>
            {items.map((item, index) => (
                <Card
                    key={index}
                    item={item}
                    direction={isListing ? 'row' : 'col'}
                    className={joinClasses({ 'w-full': isListing })}
                />
            ))}
        </div>
    );
}

function FlipCardContainer({ items }: { items: TItem[] }) {
    return (
        <div className="grid grid-cols-1 gap-6 overflow-visible p-4 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
                <FlipCard key={index} item={item} />
            ))}
        </div>
    );
}
