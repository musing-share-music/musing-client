import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

export const fetchGetReview = async (page: number, sort: string) => {
  const response = await axiosInstance({
    method: 'GET',
    url: URL.SERVERURL + URL.API.MEMBERINFO.REVIEW,
    params: { page: page, sort: sort },
  });
  return response.data;
};
