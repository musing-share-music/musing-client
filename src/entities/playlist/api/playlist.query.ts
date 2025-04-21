import { createQueryKeys } from '@lukemorales/query-key-factory';

import { fetchGetPlayList } from './PlayListGet';

export const playlist = createQueryKeys('playlist', {
  playlist: (title: string, content: string) => ({
    queryKey: [title, content],
    queryFn: () => fetchGetPlayList(title, content),
  }),
});
