import { useQuery } from '@tanstack/react-query';

import { community } from 'entities/community/api/community.query';

function useGetSearchListQuery(option: string, page: number, keyword: string, queryConfig = {}) {
  const { data, error, isLoading } = useQuery({
    ...community.filter({ option, page, keyword }),
    retry: 3,
    ...queryConfig,
  });

  return { data, isLoading, error };
}

export { useGetSearchListQuery };
