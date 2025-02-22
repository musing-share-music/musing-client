import { useQuery } from '@tanstack/react-query';

import { community } from 'entities/community/api/community.query';

function useGetListQuery(queryConfig = {}) {
  const { data, error, isLoading } = useQuery({
    select: (data) => data.data,
    ...community.list(),
    retry: 3,
    ...queryConfig,
  });

  return { data, error, isLoading };
}

export { useGetListQuery };
