import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchPostModify } from 'entities/playlist/api/PlayListModify ';

export const usePlayListModifyPostMutation = () => {
  const queryClient = useQueryClient();

  const PlayListModifyMutation = useMutation({
    mutationFn: ({ playlistId, deleteVideoLinks }: { playlistId: string; deleteVideoLinks: string }) =>
      fetchPostModify(playlistId, deleteVideoLinks),
    onSuccess: async () => {
      await queryClient.invalidateQueries();
    },
  });
  return PlayListModifyMutation;
};
