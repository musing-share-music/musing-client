import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

// 음악 추천 게시판 리스트
export const fetchGetList = async () => {
  const response = await axiosInstance({
    method: 'GET',
    url: URL.SERVERURL + URL.API.LIST,
    params: {},
  });
  return response.data;
};
