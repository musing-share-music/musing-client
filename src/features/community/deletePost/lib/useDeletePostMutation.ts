import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { fetchDeletePost } from 'entities/community/api/deletePost';

import { ROUTES } from 'shared/config/routes';

export const useDeletePostMutation = () => {
  const navigate = useNavigate();
  // const queryClient = useQueryClient();;

  const deletePostMutation = useMutation({
    mutationFn: fetchDeletePost,
    onSuccess: async () => {
      // TODO 삭제 성공 후 캐시 업데이트
      // queryClient.invalidateQueries();
      await navigate(`${ROUTES.COMMUNITY.COMMUNITY}`);
    },
  });
  return deletePostMutation;
};
