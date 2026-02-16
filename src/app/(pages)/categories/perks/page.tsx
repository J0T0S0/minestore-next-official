import { CategoryPageWrapper } from '../components/category-page-wrapper';
import { CategoryContent } from '../components/category-content';
import { testCategories } from '@/api/test-data';

export const metadata = {
    title: 'Perks/Permissions',
    description: 'Browse all available perks and permissions'
};

export default async function PerksPage() {
    const testData = testCategories['perks'];

    return (
        <CategoryPageWrapper title="Perks/Permissions">
            <CategoryContent category={testData.category} items={testData.items} />
        </CategoryPageWrapper>
    );
}
