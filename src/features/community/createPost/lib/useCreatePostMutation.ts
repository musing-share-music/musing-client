import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { fetchCreatePost } from 'entities/community/api/createPost';

import { ROUTES } from 'shared/config/routes';

export const useCreatePostMutation = () => {
  const navigate = useNavigate();

  const createPostMutation = useMutation({
    mutationFn: fetchCreatePost,
    onSuccess: async () => {
      await navigate(`${ROUTES.COMMUNITY.COMMUNITY}`);
    },
  });
  return createPostMutation;
};
