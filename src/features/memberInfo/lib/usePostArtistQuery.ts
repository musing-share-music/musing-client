import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchPostArtist } from 'entities/memberInfo/api/ArtistPost';

export const useArtistPostMutation = () => {
  const queryClient = useQueryClient();

  const ArtistModifyMutation = useMutation({
    mutationFn: (selectedArtists: string[]) => fetchPostArtist(selectedArtists),
    onSuccess: async () => {
      await queryClient.invalidateQueries();
    },
  });
  return ArtistModifyMutation;
};
