import { useQuery } from '@tanstack/react-query';

import { home } from 'entities/home/api/home.query';

function useGetMainQuery(queryConfig = {}) {
  const { data, error, isLoading } = useQuery({
    select: (data) => data.data,
    ...home.main(),
    retry: 3,
    ...queryConfig,
  });

  return { data, error, isLoading };
}

export { useGetMainQuery };
