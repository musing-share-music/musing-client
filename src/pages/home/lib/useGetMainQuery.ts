import { useQuery } from '@tanstack/react-query';

import { fetchGetMain } from 'entities/home/api/MainGet';

function useGetMainQuery(queryConfig = {}) {
  const { data, error, isLoading } = useQuery({
    queryKey: ['main'],
    queryFn: fetchGetMain,
    retry: 3,
    ...queryConfig,
  });

  return { data, error, isLoading };
}

export { useGetMainQuery };
