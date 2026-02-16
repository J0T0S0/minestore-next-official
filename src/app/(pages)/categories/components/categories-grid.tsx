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
                                'relative h-56 w-full rounded-[10px] transition-transform duration-300 group-hover:scale-105',
                                'flex flex-col items-center justify-center gap-2',
                                'p-6 text-center font-bold text-white',
                                category.color
                            )}
                        >
                            {/* Background overlay */}
                            <div className="absolute inset-0 opacity-60 transition-opacity group-hover:opacity-75" />

                            {/* Category image if available */}
                            {category.image && (
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            )}

                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center gap-3">
                                <h2 className="text-2xl font-bold uppercase tracking-wider md:text-3xl">
                                    {category.name}
                                </h2>
                                <p className="text-sm font-semibold opacity-90 group-hover:opacity-100 md:text-base">
                                    CLICK TO BROWSE
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
