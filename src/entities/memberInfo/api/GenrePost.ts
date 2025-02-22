import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

export const fetchPostGenre = async (selectedGenres: number[]) => {
  const response = await axiosInstance({
    method: 'Post',
    url: URL.SERVERURL + URL.API.MEMBERINFO.GENREMODIFY,
    data: selectedGenres,
  });
  return response.data;
};
