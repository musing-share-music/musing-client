import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

// 메인데이터 호출
export const fetchGetGenre = async (genreName: string) => {
  const response = await axiosInstance({
    method: 'GET',
    url: URL.SERVERURL + URL.API.GENRE,
    params: { genre: genreName },
  });
  return response.data;
};
