import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

// 메인데이터 호출
export const fetchGetSearchList = async (option: string, page: number, keyword: string) => {
  const response = await axiosInstance({
    method: 'GET',
    url: URL.SERVERURL + URL.API.LISTSEARCH,
    params: { searchType: option, page: page, keyword: keyword },
  });
  return response.data;
};
