import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchPostAddMusing } from 'entities/playlist/api/PlayListAdd ';

export const usePlayListAddtMutation = () => {
  const queryClient = useQueryClient();

  const PlayListAddMutation = useMutation({
    mutationFn: ({ playlistId, musicUrl }: { playlistId: string; musicUrl: string }) =>
      fetchPostAddMusing(playlistId, musicUrl),
    onSuccess: async () => {
      await queryClient.invalidateQueries();
    },
  });
  return PlayListAddMutation;
};
