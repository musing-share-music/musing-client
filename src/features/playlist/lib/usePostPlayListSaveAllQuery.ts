import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchPostSaveAll } from 'entities/playlist/api/PlayListSaveAll';
import { SavePlayListPayload } from 'entities/playlist/type';

export const usePlayListSaveAllPostMutation = () => {
  const queryClient = useQueryClient();

  const PlayListSaveAllMutation = useMutation({
    mutationFn: (payload: SavePlayListPayload) => fetchPostSaveAll(payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries();
    },
  });
  return PlayListSaveAllMutation;
};
