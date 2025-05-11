import { createQueryKeys } from '@lukemorales/query-key-factory';

import { fetchGetPlayList } from './PlayListGet';

export const playlist = createQueryKeys('playlist', {
  playlist: (url: string) => ({
    queryKey: ['playlist'],
    queryFn: () => fetchGetPlayList(url),
  }),
});
