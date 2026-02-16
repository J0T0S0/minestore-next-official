import { fetcher } from '@/api/server/fetcher';
import { getEndpoints } from '@/api';
import { CategoryPageWrapper } from '../components/category-page-wrapper';
import { CategoryContent } from '../components/category-content';
import { testCategories } from '@/api/test-data';

const { getCategoryDetails } = getEndpoints(fetcher);

export const metadata = {
    title: 'Rank Upgrades',
    description: 'Browse rank upgrades'
};

export default async function RankUpgradesPage() {
    const testData = testCategories['rank-upgrades'];

    return (
        <CategoryPageWrapper title="Rank Upgrades">
            <CategoryContent category={testData.category} items={testData.items} />
        </CategoryPageWrapper>
    );
}
