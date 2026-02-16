import { fetcher } from '@/api/server/fetcher';
import { getEndpoints } from '@/api';
import { CategoryPageWrapper } from '../components/category-page-wrapper';
import { CategoryContent } from '../components/category-content';
import { testCategories } from '@/api/test-data';

const { getCategoryDetails } = getEndpoints(fetcher);

export const metadata = {
    title: 'Ranks',
    description: 'Browse all available ranks'
};

export default async function RanksPage() {
    const testData = testCategories['ranks'];

    return (
        <CategoryPageWrapper title="Ranks">
            <CategoryContent category={testData.category} items={testData.items} />
        </CategoryPageWrapper>
    );
}
