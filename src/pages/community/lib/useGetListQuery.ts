import { useQuery } from '@tanstack/react-query';

import { fetchGetList } from 'entities/community/api/ListGet';

function useGetListQuery(queryConfig = {}) {
  const { data, error, isLoading } = useQuery({
    select: (data) => data.data,
    queryKey: ['List'],
    queryFn: fetchGetList,
    retry: 3,
    ...queryConfig,
  });

  return { data, error, isLoading };
}

export { useGetListQuery };
