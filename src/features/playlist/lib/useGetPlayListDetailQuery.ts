import { useQuery } from '@tanstack/react-query';

import { playlist } from 'entities/playlist/api/playlist.query';

function useGetPlayListDetailQuery(id: string, queryConfig = {}) {
  const { data, error, isLoading } = useQuery({
    select: (data) => data.data,
    ...playlist.detail(id),
    retry: 3,
    ...queryConfig,
  });

  return { data, isLoading, error };
}

export { useGetPlayListDetailQuery };
