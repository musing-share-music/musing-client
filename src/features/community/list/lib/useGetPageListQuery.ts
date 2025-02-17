import { useQuery } from '@tanstack/react-query';

import { community } from 'entities/community/api/community.query';

function useGetPageListQuery(page?: number, queryConfig = {}) {
  const { data, error, isLoading } = useQuery({ ...community.list(page || 1), retry: 3, ...queryConfig });

  return { data, isLoading, error };
}

export { useGetPageListQuery };
