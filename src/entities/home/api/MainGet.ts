import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

// 메인데이터 호출
export const fetchGetMain = async () => {
  const response = await axiosInstance({
    method: 'GET',
    url: URL.SERVERURL + URL.API.MAIN,
    params: {},
  });
  return response.data;
};
