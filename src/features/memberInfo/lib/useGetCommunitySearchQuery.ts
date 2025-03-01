import { useQuery } from '@tanstack/react-query';

import { member } from 'entities/memberInfo/api/memberInfo.query';

function useGetCommunitySearchQuery(
  page?: number,
  sort?: string,
  searchType?: string,
  keyword?: string,
  queryConfig = {},
) {
  const { data, error, isLoading } = useQuery({
    select: (data) => data.data,
    ...member.communitySearch(page || 0, sort || 'DESC', searchType || '', keyword || ''),
    retry: 3,
    ...queryConfig,
  });

  return { data, isLoading, error };
}

export { useGetCommunitySearchQuery };
