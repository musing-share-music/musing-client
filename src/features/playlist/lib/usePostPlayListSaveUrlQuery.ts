import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchPostSaveUrl } from 'entities/playlist/api/PlayListSaveUrl';

export const usePlayListSaveUrlPostMutation = () => {
  const queryClient = useQueryClient();

  const PlayListSaveMutation = useMutation({
    mutationFn: ({ url }: { url: string }) => fetchPostSaveUrl(url),
    onSuccess: async () => {
      await queryClient.invalidateQueries();
    },
  });
  return PlayListSaveMutation;
};
