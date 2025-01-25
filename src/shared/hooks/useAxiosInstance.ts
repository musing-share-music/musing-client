import axios from 'axios';

import URL from 'shared/config/urls';

// axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: URL.BASEURL,
  withCredentials: true,
  timeout: 5000, // 임의로 지정
  headers: {
    'Content-Type': 'application/json',
  },
});

// 응답 인터셉터 설정
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response && error.response.status === 401) {
      window.location.href = '/';
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
