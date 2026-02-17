'use client';

import Link from 'next/link';
import Image from 'next/image';
import { joinClasses } from '@helpers/join-classes';

type CategoryCard = {
    name: string;
    slug: string;
    image: string | null;
    color: string;
};

type CategoriesGridProps = {
    categories: CategoryCard[];
};

export function CategoriesGrid({ categories }: CategoriesGridProps) {
    return (
        <div className="w-full flex-col gap-6 overflow-visible pb-16">
            <div className="grid grid-cols-1 gap-6 overflow-visible md:grid-cols-2">
                {categories.map((category) => (
                    <Link
                        key={category.slug}
                        href={`/categories/${category.slug}`}
                        className="group relative"
                    >
                        <div
                            className={joinClasses(
                                'relative h-48 w-full overflow-hidden rounded-2xl transition-transform duration-300 group-hover:scale-105',
                                'flex items-end',
                                'p-8',
                                category.color
                            )}
                        >
                            {/* Content on bottom left */}
                            <div className="relative z-10 flex flex-col gap-2">
                                <h2 className="text-3xl font-bold uppercase tracking-wider text-white">
                                    {category.name}
                                </h2>
                                <p className="text-base font-semibold text-white/80 transition-colors group-hover:text-white">
                                    CLICK TO BROWSE
                                </p>
                            </div>

                            {/* Test image on right - constrained to less than 50% width */}
                            <div className="absolute right-0 top-0 h-full w-2/5">
                                <Image
                                    src="/assets/imgs/pngs/test.png"
                                    alt={category.name}
                                    fill
                                    className="object-cover object-right transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
