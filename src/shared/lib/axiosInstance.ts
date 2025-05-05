import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

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

// 토큰 재발급 처리를 위한 함수
const handleTokenReissue = async (error: AxiosError): Promise<AxiosResponse | undefined> => {
  const userInfo = getUserInfo();

  if (!userInfo?.userId) {
    useErrorModalStore.getState().openModal('인증 정보가 없습니다. 다시 로그인해주세요.', true);
    pendingTokenReissueError = error;
    return Promise.reject(error);
  }

  try {
    const response = await axios.get(`${URL.SERVERURL}${URL.API.TOKENREISSUE}?userId=${userInfo.userId}`, {
      withCredentials: true,
    });

    if (response.status === 200 && error.config) {
      return axiosInstance(error.config as InternalAxiosRequestConfig);
    }
  } catch (reissueError) {
    console.log(reissueError);
    useErrorModalStore.getState().openModal('토큰 재발급에 실패했습니다. 다시 로그인해주세요.', true);
    pendingTokenReissueError = error;
  }

  return Promise.reject(error);
};

// 모달의 확인 버튼 클릭 이벤트를 처리하기 위한 커스텀 이벤트
let pendingTokenReissueError: AxiosError | null = null;
window.addEventListener('token-reissue-confirmed', () => {
  if (pendingTokenReissueError) {
    window.location.href = '/';
    pendingTokenReissueError = null;
  }
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      try {
        return await handleTokenReissue(error);
      } catch (reissueError) {
        return Promise.reject(reissueError);
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
