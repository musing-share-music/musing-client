import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchPostRemove } from 'entities/playlist/api/PlayListRemove';
import { ROUTES } from 'shared/config/routes';

type RemoveParams = {
  playlistId: string;
  shouldNavigate?: boolean;
  navigate?: (to: string) => void;
}

export const usePlayListRemovePostMutation = () => {
  const queryClient = useQueryClient();

  const PlayListRemoveMutation = useMutation({
    mutationFn: ({ playlistId }: RemoveParams) => fetchPostRemove(playlistId),
    onSuccess: async (_data, variables) => {
      if (variables.shouldNavigate && variables.navigate) {
        alert('플레이리스트가 삭제되었습니다.');
        variables.navigate(ROUTES.HOME);
      }
      await queryClient.invalidateQueries();
    },
  });
  return PlayListRemoveMutation;
};
