import { useMutation } from '@tanstack/react-query';

import URL from 'shared/config/urls';
import axiosInstance from 'shared/hooks/useAxiosInstance';

const PostMood = async (selectedMoods: number[]) => {
  const response = await axiosInstance({
    method: 'POST',
    url: URL.SERVERURL + URL.API.MOODMODAL,
    data: selectedMoods,
  });
  return response.data;
};

function usePostMood() {
  const mutation = useMutation({
    mutationFn: (selectedGenres: number[]) => PostMood(selectedGenres),
  });

  return mutation;
}

export { usePostMood };
