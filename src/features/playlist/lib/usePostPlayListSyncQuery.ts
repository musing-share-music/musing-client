import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchPostSync } from 'entities/playlist/api/PlayListSync';

export const usePlayListSyncPostMutation = () => {
  const queryClient = useQueryClient();

  const PlayListSyncMutation = useMutation({
    mutationFn: ({ url }: { url: string }) => fetchPostSync(url),
    onSuccess: async () => {
      // 동기화 성공 후 플레이리스트 상세 정보 쿼리를 무효화하여 새로고침
      await queryClient.invalidateQueries({ queryKey: ['playlist', 'detail'] });
    },
  });
  return PlayListSyncMutation;
}; 