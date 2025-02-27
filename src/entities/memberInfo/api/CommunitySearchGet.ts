import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

export const fetchGetCommunitySearch = async (page: number, sort: string, searchType: string, keyword: string) => {
  const response = await axiosInstance({
    method: 'GET',
    url: URL.SERVERURL + URL.API.MEMBERINFO.COMMUNITYSEARCH,
    params: { page: page, sort: sort, searchType: searchType, keyword: keyword },
  });
  return response.data;
};
