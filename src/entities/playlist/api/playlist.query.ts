import { createQueryKeys } from '@lukemorales/query-key-factory';

import { fetchPostSave } from './PlayListSave';
import { fetchPostSaveUrl } from './PlayListSaveUrl';

export const playlist = createQueryKeys('playlist', {
  saveUrl: (url: string) => ({
    queryKey: ['saveUrl', url],
    queryFn: () => fetchPostSaveUrl(url),
  }),
  save: (title: string, description: string) => ({
    queryKey: ['save', title, description],
    queryFn: () => fetchPostSave(title, description),
  }),
});
