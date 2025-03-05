import axios from 'axios';

import URL from 'shared/config/urls';
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
        const response = await axios.get(`${URL.SERVERURL}${URL.API.TOKENREISSUE}?userId=${userInfo.userId}`, {
          withCredentials: true,
        });

        if (response.status === 200) {
          return axiosInstance(error.config);
        }
      } catch (reissueError) {
        alert(reissueError);
        window.location.href = '/';
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
