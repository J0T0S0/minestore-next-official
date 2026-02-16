import { CategoryPageWrapper } from '../components/category-page-wrapper';
import { CategoryContent } from '../components/category-content';
import { testCategories } from '@/api/test-data';

export const metadata = {
    title: 'Cosmetics',
    description: 'Browse cosmetic items'
};

export default async function CosmeticsPage() {
    const testData = testCategories['cosmetics'];

    return (
        <CategoryPageWrapper title="Cosmetics">
            <CategoryContent category={testData.category} items={testData.items} />
        </CategoryPageWrapper>
    );
}
