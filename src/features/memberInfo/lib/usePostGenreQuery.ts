import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchPostGenre } from 'entities/memberInfo/api/GenrePost';

export const useGenrePostMutation = () => {
  const queryClient = useQueryClient();

  const GenreModifyMutation = useMutation({
    mutationFn: (selectedGenres: number[]) => fetchPostGenre(selectedGenres),
    onSuccess: async () => {
      await queryClient.invalidateQueries();
    },
  });
  return GenreModifyMutation;
};
