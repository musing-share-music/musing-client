import { useQuery } from '@tanstack/react-query';

import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

// 메인데이터 호출
const GetMain = async () => {
  const response = await axiosInstance({
    method: 'GET',
    url: URL.SERVERURL + URL.API.MAIN,
    params: {},
  });
  return response.data;
};

function useGetMain(queryConfig = {}) {
  const queryKey = ['network', { method: 'GET', url: URL.SERVERURL + URL.API.MAIN, params: {} }];

  const { data, error, isLoading } = useQuery({
    queryKey,
    queryFn: GetMain,
    retry: 3,
    ...queryConfig,
  });

  return [data, error, isLoading];
}

export { useGetMain };
