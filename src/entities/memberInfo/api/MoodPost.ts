import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

export const fetchPostMood = async (selectedMoods: number[]) => {
  const response = await axiosInstance({
    method: 'Post',
    url: URL.SERVERURL + URL.API.MEMBERINFO.MOODMODIFY,
    data: selectedMoods,
  });
  return response.data;
};
