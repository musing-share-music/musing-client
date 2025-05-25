import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { FetchPostReplyWriteResponse, Reply } from 'entities/reply/model/type';

import { fetchGetReply, FetchGetReplyDto, fetchPostReplyWrite } from '.';

export const reply = createQueryKeys('reply', {
  list: ({ boardId, ...filters }: FetchGetReplyDto) => ({
    queryKey: [{ boardId, ...filters }],
    queryFn: () => fetchGetReply({ boardId, ...filters }),
  }),
});

export const useReplyWriteMutation = (boardId: number) => {
  const queryClient = useQueryClient();

  const queryKey = [reply.list({ boardId })];
  const tempUuId = Date.now();

  return useMutation({
    mutationFn: fetchPostReplyWrite,
    onMutate: async (newReview) => {
      await queryClient.cancelQueries({ queryKey });
      const previous = queryClient.getQueryData(queryKey);
      queryClient.setQueryData(queryKey, (old = []) => [...(old as Reply[]), { ...newReview, id: tempUuId }]);
      return { previous };
    },
    onError: (_err, _newReview, context) => {
      if (context?.previous) {
        queryClient.setQueryData(queryKey, context.previous);
      }
    },
    onSuccess: (data: FetchPostReplyWriteResponse) => {
      queryClient.setQueryData<Reply[]>(queryKey, (old = []) => {
        const filtered = (old || []).filter((r) => !r.id.toString().startsWith(tempUuId.toString()));
        return [...filtered, data.data.replyDto];
      });
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey });
    },
  });
};
