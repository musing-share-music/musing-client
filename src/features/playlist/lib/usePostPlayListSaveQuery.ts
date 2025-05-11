import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchGetPlayListSave } from 'entities/playlist/api/PlayListSave';

export const usePlayListSavePostMutation = () => {
  const queryClient = useQueryClient();

  const PlayListSaveMutation = useMutation({
    mutationFn: ({ title, description }: { title: string; description: string }) =>
      fetchGetPlayListSave(title, description),
    onSuccess: async () => {
      await queryClient.invalidateQueries();
    },
  });
  return PlayListSaveMutation;
};
