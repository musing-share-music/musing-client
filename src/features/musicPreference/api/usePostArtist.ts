import { useMutation } from '@tanstack/react-query';

import URL from 'shared/config/urls';
import axiosInstance from 'shared/hooks/useAxiosInstance';

const PostArtist = async (selectedArtists: string[]) => {
  const response = await axiosInstance({
    method: 'POST',
    url: URL.SERVERURL + URL.API.ARTISTMODAL,
    data: selectedArtists,
  });
  return response.data;
};

function usePostArtist() {
  const mutation = useMutation({
    mutationFn: (selectedArtists: string[]) => PostArtist(selectedArtists),
  });

  return mutation;
}

export { usePostArtist };
