import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { fetchUpdateNotice } from 'entities/notice/api';
import { notice } from 'entities/notice/api/notice.query';

import { ROUTES } from 'shared/config/routes';

export const useUpdateNoticeMutation = (noticeId: number) => {
  const navigate = useNavigate();
  const client = useQueryClient();

  const updateNoticeMutation = useMutation({
    mutationFn: fetchUpdateNotice,
    onSuccess: async () => {
      await navigate(`${ROUTES.ADMIN.NOTICE}/${noticeId}`);
      await client.invalidateQueries({ queryKey: [notice, noticeId] });
    },
  });
  return updateNoticeMutation;
};
