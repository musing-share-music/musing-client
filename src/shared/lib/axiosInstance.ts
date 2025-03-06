import axios from 'axios';

import URL from 'shared/config/urls';
import { useErrorModalStore } from 'shared/store/errorModalStore';
import { useUserInfoStore } from 'shared/store/userInfo';

const getUserInfo = () => {
  try {
    return useUserInfoStore.getState().userInfo;
  } catch (err) {
    alert(err);
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
  async (error) => {
    if (error.response?.status === 401) {
      const userInfo = getUserInfo();

      if (!userInfo?.userId) {
        window.location.href = '/';
        return Promise.reject(error);
      }

      try {
        useErrorModalStore.getState().openModal('세션이 만료되었습니다. 토큰을 재발급합니다.');
        const response = await axios.get(`${URL.SERVERURL}${URL.API.TOKENREISSUE}?userId=${userInfo.userId}`, {
          withCredentials: true,
        });

        if (response.status === 200) {
          return axiosInstance(error.config);
        }
      } catch (reissueError) {
        console.log(reissueError);
        useErrorModalStore.getState().openModal('토큰 재발급에 실패했습니다. 다시 로그인해주세요.');
        window.location.href = '/';
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
