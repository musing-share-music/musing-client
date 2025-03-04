import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { fetchCreateNotice } from 'entities/notice/api/createNotice';

import { ROUTES } from 'shared/config/routes';

export const useCreatePostMutation = () => {
  const navigate = useNavigate();

  const createPostMutation = useMutation({
    mutationFn: fetchCreateNotice,
    onSuccess: async () => {
      await navigate(`${ROUTES.ADMIN.NOTICE}`);
    },
  });
  return createPostMutation;
};
