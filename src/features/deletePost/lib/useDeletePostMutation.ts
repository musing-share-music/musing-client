import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { fetchDeletePost } from 'entities/post/api/deletePost';

import { ROUTES } from 'shared/config/routes';

export const useDeletePostMutation = () => {
  const navigate = useNavigate();

  const deletePostMutation = useMutation({
    mutationFn: fetchDeletePost,
    onSuccess: async () => {
      await navigate(`${ROUTES.COMMUNITY.COMMUNITY}`);
    },
  });
  return deletePostMutation;
};
