import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import URL from 'shared/config/urls';

// 파라미터 타입
type Parameter = {
  method: string;
  url: string;
  params?: object;
};

// axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: URL.BASEURL,
  timeout: 5000, // 임의로 지정
  headers: {
    'Content-Type': 'application/json',
  },
});

const fetchData = async ({ method, url, params }: Parameter) => {
  const response = await axiosInstance({
    method,
    url,
    params,
  });
  return response.data;
};

function useNetwork({ method, url, params }: Parameter) {
  const queryKey = ['network', { method, url, params }];

  return useQuery({
    queryKey,
    queryFn: () => fetchData({ method, url, params }),
    enabled: Boolean(url),
  });
}

export default useNetwork;
