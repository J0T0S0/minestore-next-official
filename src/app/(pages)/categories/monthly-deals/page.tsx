import { fetcher } from '@/api/server/fetcher';
import { getEndpoints } from '@/api';
import { CategoryPageWrapper } from '../components/category-page-wrapper';
import { CategoryContent } from '../components/category-content';
import { testCategories } from '@/api/test-data';

const { getCategoryDetails } = getEndpoints(fetcher);

export const metadata = {
    title: 'Monthly/Seasonal Deals',
    description: 'Browse our monthly and seasonal deals'
};

export default async function MonthlyDealsPage() {
    const testData = testCategories['monthly-deals'];

    return (
        <CategoryPageWrapper title="Monthly/Seasonal Deals">
            <CategoryContent category={testData.category} items={testData.items} />
        </CategoryPageWrapper>
    );
}
