import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { fetchPostLogout } from 'entities/home/api/LogoutPost';

export const useLogoutPostMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const LogoutMutation = useMutation({
    mutationFn: () => fetchPostLogout(),
    onSuccess: async () => {
      await queryClient.invalidateQueries();
      setTimeout(() => navigate('/'), 0);
    },
  });
  return LogoutMutation;
};
