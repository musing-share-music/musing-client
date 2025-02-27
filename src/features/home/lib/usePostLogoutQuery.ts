import { useMutation, useQueryClient } from '@tanstack/react-query';

import { fetchPostLogout } from 'entities/home/api/LogoutPost';

export const useLogoutPostMutation = () => {
  const queryClient = useQueryClient();

  const LogoutMutation = useMutation({
    mutationFn: () => fetchPostLogout(),
    onSuccess: async () => {
      await queryClient.invalidateQueries();
    },
  });
  return LogoutMutation;
};
