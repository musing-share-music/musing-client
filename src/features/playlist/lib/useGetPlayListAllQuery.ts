import { useQuery } from '@tanstack/react-query';

import { playlist } from 'entities/playlist/api/playlist.query';

function useGetPlayListAllQuery(enabled = false, queryConfig = {}) {
  const { data, error, isLoading } = useQuery({
    select: (data) => data.data,
    ...playlist.listAll(),
    retry: 3,
    enabled,
    ...queryConfig,
  });

  return { data, isLoading, error };
}

export { useGetPlayListAllQuery };
