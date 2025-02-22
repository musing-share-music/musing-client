import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

export const fetchPostArtist = async (selectedArtists: string[]) => {
  const response = await axiosInstance({
    method: 'Post',
    url: URL.SERVERURL + URL.API.MEMBERINFO.ARTISTMODIFY,
    data: selectedArtists,
  });
  return response.data;
};
