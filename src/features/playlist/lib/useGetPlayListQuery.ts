import { useQuery } from '@tanstack/react-query';

import { playlist } from 'entities/playlist/api/playlist.query';

function useGetPlayListQuery(queryConfig = {}) {
  const { data, error, isLoading } = useQuery({
    select: (data) => data.data,
    ...playlist.list(),
    retry: 3,
    ...queryConfig,
  });

  return { data, isLoading, error };
}

export { useGetPlayListQuery };
