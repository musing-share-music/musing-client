import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchPostRemove } from 'entities/playlist/api/PlayListRemove';

export const usePlayListRemovePostMutation = () => {
  const queryClient = useQueryClient();

  const PlayListRemoveMutation = useMutation({
    mutationFn: ({ playlistId }: { playlistId: string }) => fetchPostRemove(playlistId),
    onSuccess: async () => {
      await queryClient.invalidateQueries();
    },
  });
  return PlayListRemoveMutation;
};
