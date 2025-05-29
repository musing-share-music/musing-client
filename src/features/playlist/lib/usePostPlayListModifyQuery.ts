import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchPostModify } from 'entities/playlist/api/PlayListModify ';

export const usePlayListModifyPostMutation = () => {
  const queryClient = useQueryClient();

  const PlayListModifyMutation = useMutation({
    mutationFn: ({
      playlistId,
      deleteVideoLinks,
      body,
    }: {
      playlistId: string;
      deleteVideoLinks: string[];
      body: { title: string; description: string };
    }) => fetchPostModify(playlistId, deleteVideoLinks, body),
    onSuccess: async () => {
      await queryClient.invalidateQueries();
    },
  });
  return PlayListModifyMutation;
};
