import { useMutation } from '@tanstack/react-query';

import URL from 'shared/config/urls';
import axiosInstance from 'shared/lib/axiosInstance';

const PostGenre = async (selectedGenres: number[]) => {
  const response = await axiosInstance({
    method: 'POST',
    url: URL.SERVERURL + URL.API.GENREMODAL,
    data: selectedGenres,
  });
  return response.data;
};

function usePostGenre() {
  const mutation = useMutation({
    mutationFn: (selectedGenres: number[]) => PostGenre(selectedGenres),
  });

  return mutation;
}

export { usePostGenre };
