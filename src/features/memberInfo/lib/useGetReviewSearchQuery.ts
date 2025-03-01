import { useQuery } from '@tanstack/react-query';

import { member } from 'entities/memberInfo/api/memberInfo.query';

function useGetReviewSearchQuery(
  page?: number,
  sort?: string,
  searchType?: string,
  keyword?: string,
  queryConfig = {},
) {
  const { data, error, isLoading } = useQuery({
    select: (data) => data.data,
    ...member.reviewSearch(page || 0, sort || 'DESC', searchType || '', keyword || ''),
    retry: 3,
    ...queryConfig,
  });

  return { data, isLoading, error };
}

export { useGetReviewSearchQuery };
