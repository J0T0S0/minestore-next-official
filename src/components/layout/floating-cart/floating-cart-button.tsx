'use client';

import { ShoppingBag, User } from 'lucide-react';
import { useState } from 'react';
import { CartModal } from './cart-modal';

export function FloatingCartButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed right-[25px] top-1/2 z-50 flex h-[113px] w-[55px] -translate-y-1/2 flex-col items-center justify-around rounded-xl border-2 border-purple-400/50 bg-[#2d1556] shadow-lg outline outline-1 outline-offset-2 outline-purple-400/30 transition-all hover:scale-105 hover:border-purple-400 hover:shadow-xl"
                style={{ padding: '8px' }}
                aria-label="Open cart"
            >
                <div className="flex aspect-square w-full items-center justify-center rounded-lg bg-[#8B7355]">
                    <User className="h-6 w-6 text-[#4a3728]" strokeWidth={2} />
                </div>
                <div className="flex aspect-square w-full items-center justify-center">
                    <ShoppingBag className="h-5 w-5 text-purple-400" strokeWidth={2.5} />
                </div>
            </button>

            <CartModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}
