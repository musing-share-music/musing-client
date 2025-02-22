import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

export const fetchGetCommunity = async (page: number, sort: string) => {
  const response = await axiosInstance({
    method: 'GET',
    url: URL.SERVERURL + URL.API.MEMBERINFO.COMMUNITY,
    params: { page: page, sort: sort },
  });
  return response.data;
};
