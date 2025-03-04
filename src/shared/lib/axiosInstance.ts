import axios from 'axios';

import URL from 'shared/config/urls';
import { useUserInfoStore } from 'shared/store/userInfo';

const getUserInfo = () => {
  try {
    return useUserInfoStore.getState().userInfo;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const axiosInstance = axios.create({
  baseURL: URL.SERVERURL,
  withCredentials: true,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const userInfo = getUserInfo(); // 안전한 상태 접근

      // 이메일 확인
      if (!userInfo?.email) {
        window.location.href = '/';
        return Promise.reject(error);
      }

      // 토큰 재발급 페이지로 이동
      window.location.href = `${URL.TOKENREISSUE}?email=${userInfo.email}`;
      return Promise.reject(error);
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
