import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import URL from 'shared/config/urls';

// axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: URL.BASEURL,
  timeout: 5000, // 임의로 지정
  headers: {
    'Content-Type': 'application/json',
  },
});

// 메인데이터 호출
const fetchMain = async () => {
  const response = await axiosInstance({
    method: 'GET',
    url: URL.SERVERURL + URL.API.MAIN,
    params: {},
  });
  return response.data;
};

function useNetworkMain(queryConfig = {}) {
  const queryKey = ['network', { method: 'GET', url: URL.SERVERURL + URL.API.MAIN, params: {} }];

  const { data, error, isLoading } = useQuery({
    queryKey,
    queryFn: fetchMain,
    retry: 3,
    ...queryConfig,
  });

  return [data, error, isLoading];
}

export { useNetworkMain };
