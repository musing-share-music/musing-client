import { useQuery } from '@tanstack/react-query';

import { home } from 'entities/home/api/home.query';

function useGetGenreQuery(genreName?: string, queryConfig = {}) {
  const { data, error, isLoading } = useQuery({
    select: (data) => data.data,
    ...home.genre(genreName || ''),
    enabled: !!genreName, // genreName이 있을 때만 요청
    retry: 3,
    ...queryConfig,
  });

  return { data, error, isLoading };
}

export { useGetGenreQuery };
