import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useQuery } from '@tanstack/react-query';

import { useAdminInfoStore } from 'shared/store/adminInfo';

import { fetchGetAdminInfo } from './adminIInfo';

const adminInfo = createQueryKeys('adminInfo', {
  info: () => ({
    queryKey: ['info'],
    queryFn: () => fetchGetAdminInfo(),
  }),
});

export const useAdminInfoQuery = () => {
  const setIsAdmin = useAdminInfoStore((state) => state.setIsAdmin);

  const { data, ...query } = useQuery({
    ...adminInfo.info(),
    staleTime: Infinity,
    select: (data) => {
      return {
        ...data,
        isAdmin: data.data.authority === 'ADMIN',
      };
    },
  });

  if (data) {
    setIsAdmin(data.isAdmin);
  }

  return { data, ...query };
};
