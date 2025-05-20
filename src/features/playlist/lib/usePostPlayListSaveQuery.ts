import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchPostSave } from 'entities/playlist/api/PlayListSave';

export const usePlayListSavePostMutation = () => {
  const queryClient = useQueryClient();

  const PlayListSaveMutation = useMutation({
    mutationFn: ({ listName, description }: { listName: string; description: string }) =>
      fetchPostSave(listName, description),
    onSuccess: async () => {
      await queryClient.invalidateQueries();
    },
  });
  return PlayListSaveMutation;
};
