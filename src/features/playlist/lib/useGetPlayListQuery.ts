import { useQuery } from '@tanstack/react-query';

import { playlist } from 'entities/playlist/api/playlist.query';

function useGetPlayListQuery(url: string, queryConfig = {}) {
  const { data, error, isLoading } = useQuery({
    select: (data) => data.data,
    ...playlist.playlist(url),
    retry: 3,
    ...queryConfig,
  });

  return { data, error, isLoading };
}

export { useGetPlayListQuery };
