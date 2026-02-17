'use client';

import { TItem } from '@/types/item';
import { useState } from 'react';
import { Price } from '@/components/base/price/price';
import { Gem, Star } from 'lucide-react';

type FlipCardProps = {
    item: TItem;
};

export function FlipCard({ item }: FlipCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const price = item.is_virtual_currency_only ? item.virtual_price || 0 : item.price;
    const hasComparison = item.comparison && item.comparison.length > 0;

    return (
        <div
            className="perspective h-60 w-80 cursor-pointer"
            onMouseEnter={() => isFlipped || setIsFlipped(true)}
            onMouseLeave={() => isFlipped && setIsFlipped(false)}
        >
            <div
                className="relative h-full w-full transform-gpu transition-transform duration-500"
                style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
            >
                {/* Front Side */}
                <div
                    className="gap-1.25 absolute flex h-full w-full flex-col justify-around rounded-lg border-2 border-purple-500/30 bg-[#190945] p-2.5"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    <div className="flex items-center justify-center">
                        <div className="flex h-28 w-28 items-center justify-center rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-lg">
                            <Gem size={64} className="text-yellow-900" />
                        </div>
                    </div>

                    <div className="flex flex-col text-center">
                        <h3 className="mb-1 text-2xl font-bold text-white">{item.name}</h3>
                        <div className="text-center">
                            <Price
                                originalPrice={item.original_price}
                                discount={item.discount}
                                value={price}
                                isVirtual={item.is_virtual_currency_only}
                                className="flex flex-wrap items-center justify-center gap-2 text-xl font-bold text-purple-500"
                            />
                        </div>
                    </div>
                </div>

                {/* Back Side */}
                <div
                    className="absolute flex h-full w-full flex-col items-center justify-start overflow-y-auto rounded-lg border-2 border-purple-500/30 bg-[#190945] p-6"
                    style={{
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                    }}
                >
                    <h4 className="mb-4 mt-2 text-lg font-bold text-yellow-400">Features</h4>

                    {item.description && (
                        <div className="mb-4 text-center text-sm text-white">
                            {item.description}
                        </div>
                    )}

                    {hasComparison ? (
                        <ul className="w-full space-y-2">
                            {item.comparison!.map((comp, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-xs text-white">
                                    <Star
                                        size={14}
                                        className="mt-0.5 flex-shrink-0 text-yellow-400"
                                    />
                                    <span>{comp.value}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <div className="text-center text-sm italic text-white">
                            No features available
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
