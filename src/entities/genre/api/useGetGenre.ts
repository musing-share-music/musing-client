import { useQuery } from '@tanstack/react-query';

import { Genre } from 'entities/genre/model/genre';

import URL from 'shared/config/urls';
import axiosInstance from 'shared/hooks/useAxiosInstance';

interface GetGenreResponse {
  data: Genre[];
  message: string;
}

// 장르 태그 데이터
const getGenre = async () => {
  const response = await axiosInstance<GetGenreResponse>({
    method: 'GET',
    url: URL.SERVERURL + URL.API.GENREMODAL,
  });
  return response.data;
};

function useGetGenre(queryConfig = {}) {
  const queryKey = ['network', { method: 'GET', url: URL.SERVERURL + URL.API.GENREMODAL }];

  const { data, error, isLoading } = useQuery({
    queryKey,
    queryFn: getGenre,
    retry: 3,
    staleTime: Infinity, // 정적 데이터이므로 infinity로 설정
    select(data) {
      return data.data;
    },
    ...queryConfig,
  });

  return { data, error, isLoading };
}

export { useGetGenre };
