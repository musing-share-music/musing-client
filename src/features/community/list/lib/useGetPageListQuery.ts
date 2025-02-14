import { useQuery } from '@tanstack/react-query';

import { fetchGetPageList } from 'entities/community/api/PageListGet';

function useGetPageListQuery(page?: number, queryConfig = {}) {
  const { data, error, isLoading } = useQuery({
    queryKey: ['pageList', page],
    queryFn: () => (page ? fetchGetPageList(page) : Promise.resolve(null)),
    retry: 3,
    ...queryConfig,
  });

  return { data, isLoading, error };
}

export { useGetPageListQuery };
