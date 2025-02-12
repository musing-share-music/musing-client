import { useQuery } from '@tanstack/react-query';

import { fetchGetGenre } from 'entities/home/api/GenreGet';

function useGetGenreQuery(genreName?: string, queryConfig = {}) {
  const { data, error, isLoading } = useQuery({
    queryKey: ['genre', genreName],
    queryFn: () => fetchGetGenre(genreName!),
    enabled: !!genreName, // genreName이 있을 때만 요청
    retry: 3,
    ...queryConfig,
  });

  return { data, error, isLoading };
}

export { useGetGenreQuery };
