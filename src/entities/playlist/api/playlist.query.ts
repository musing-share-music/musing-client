import { createQueryKeys } from '@lukemorales/query-key-factory';

import { fetchGetPlayList } from './PlayList';
import { fetchPostAddMusing } from './PlayListAdd ';
import { fetchGetPlayListDetail } from './PlayListDetail';
import { fetchPostModify } from './PlayListModify ';
import { fetchPostRemove } from './PlayListRemove';
import { fetchPostSave } from './PlayListSave';
import { fetchPostSaveUrl } from './PlayListSaveUrl';

export const playlist = createQueryKeys('playlist', {
  list: () => ({
    queryKey: ['list'],
    queryFn: () => fetchGetPlayList(),
  }),
  detail: (id: string) => ({
    queryKey: ['detail', id],
    queryFn: () => fetchGetPlayListDetail(id),
  }),
  saveUrl: (url: string) => ({
    queryKey: ['saveUrl', url],
    queryFn: () => fetchPostSaveUrl(url),
  }),
  save: (listName: string, description: string) => ({
    queryKey: ['save', listName, description],
    queryFn: () => fetchPostSave(listName, description),
  }),
  remove: (playlistId: string, deleteVideoLinks: string) => ({
    queryKey: ['modify', playlistId],
    queryFn: () => fetchPostModify(playlistId, deleteVideoLinks),
  }),
  modify: (playlistId: string) => ({
    queryKey: ['remove', playlistId],
    queryFn: () => fetchPostRemove(playlistId),
  }),
  add: (playlistId: string, musicUrl: string) => ({
    queryKey: ['remove', playlistId, musicUrl],
    queryFn: () => fetchPostAddMusing(playlistId, musicUrl),
  }),
});
