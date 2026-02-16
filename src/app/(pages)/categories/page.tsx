import { CategoriesGrid } from './components/categories-grid';

export const metadata = {
    title: 'Store Categories',
    description: 'Browse all available store categories'
};

const categories = [
    {
        name: 'Monthly/Seasonal Deals',
        slug: 'monthly-deals',
        image: null,
        color: 'bg-gradient-to-br from-pink-500 to-pink-700'
    },
    {
        name: 'Ranks',
        slug: 'ranks',
        image: null,
        color: 'bg-gradient-to-br from-red-500 to-red-700'
    },
    {
        name: 'Rank Upgrades',
        slug: 'rank-upgrades',
        image: null,
        color: 'bg-gradient-to-br from-orange-500 to-orange-700'
    },
    {
        name: 'Perks/Perms',
        slug: 'perks',
        image: null,
        color: 'bg-gradient-to-br from-blue-500 to-blue-700'
    },
    {
        name: 'Cosmetics',
        slug: 'cosmetics',
        image: null,
        color: 'bg-gradient-to-br from-purple-500 to-purple-700'
    },
    {
        name: 'Keys',
        slug: 'keys',
        image: null,
        color: 'bg-gradient-to-br from-green-500 to-green-700'
    }
];

export default function CategoriesPage() {
    return (
        <div className="w-full flex-col gap-6">
            <h1 className="text-center text-[34px] font-bold text-primary">Browse Categories</h1>
            <CategoriesGrid categories={categories} />
        </div>
    );
}
