import { useQuery } from '@tanstack/react-query';

import { fetchGetSearchList } from 'entities/community/api/SearchListGet';

function useGetSearchListQuery(option: string, page: number, keyword: string, queryConfig = {}) {
  const queryKey = [
    'SearchList',
    {
      params: { searchType: option, page: page, keyword: keyword },
    },
  ];

  const { data, error, isLoading } = useQuery({
    queryKey,
    queryFn: () => fetchGetSearchList(option, page, keyword),
    retry: 3,
    ...queryConfig,
  });

  return { data, isLoading, error };
}

export { useGetSearchListQuery };
