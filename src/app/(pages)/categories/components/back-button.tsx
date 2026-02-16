'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

export function BackButton() {
    const router = useRouter();

    return (
        <div className="w-full flex-row items-center gap-3 rounded-t-[10px] bg-card px-4 py-3">
            <button
                onClick={() => router.back()}
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Go back"
            >
                <ArrowLeft size={24} />
            </button>
            <span className="text-sm font-semibold text-muted-foreground">Back</span>
        </div>
    );
}
