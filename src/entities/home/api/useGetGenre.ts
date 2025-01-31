import { useQuery } from '@tanstack/react-query';

import URL from 'shared/config/urls';
import axiosInstance from 'shared/hooks/useAxiosInstance';

// 메인데이터 호출
const GetGenre = async (genreName: string) => {
  const response = await axiosInstance({
    method: 'GET',
    url: URL.SERVERURL + URL.API.GENRE,
    params: { genre: genreName },
  });
  return response.data;
};

function useGetGenre(genreName?: string, queryConfig = {}) {
  const queryKey = ['network', { method: 'GET', url: URL.SERVERURL + URL.API.GENRE, params: { genre: genreName } }];

  const { data, error, isLoading } = useQuery({
    queryKey,
    queryFn: () => (genreName ? GetGenre(genreName) : Promise.resolve(null)), // genreName이 없으면 요청 안 함
    enabled: !!genreName, // genreName이 있을 때만 요청
    retry: 3,
    ...queryConfig,
  });

  return { data, error, isLoading };
}

export { useGetGenre };
