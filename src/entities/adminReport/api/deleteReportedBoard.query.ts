import { useMutation, useQueryClient } from '@tanstack/react-query';

import { deleteReportedBoard } from './deleteReportedBoard';

export const useDeleteReportedBoard = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteReportedBoard,
    onSuccess: async () => {
      // Invalidate the reported board list query to trigger a refetch
      await queryClient.invalidateQueries({ queryKey: ['reportedBoardList'] });
    },
  });
};
