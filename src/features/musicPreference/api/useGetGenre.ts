import { useQuery } from '@tanstack/react-query';

import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

// 메인데이터 호출
const GetGenre = async () => {
  const response = await axiosInstance({
    method: 'GET',
    url: URL.SERVERURL + URL.API.GENREMODAL,
    params: {},
  });
  return response.data;
};

function useGetGenre(queryConfig = {}) {
  const queryKey = ['network', { method: 'GET', url: URL.SERVERURL + URL.API.GENREMODAL, params: {} }];

  const { data, error, isLoading } = useQuery({
    queryKey,
    queryFn: GetGenre,
    retry: 3,
    ...queryConfig,
  });

  return [data, error, isLoading];
}

export { useGetGenre };
