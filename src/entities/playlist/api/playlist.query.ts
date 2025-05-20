import { createQueryKeys } from '@lukemorales/query-key-factory';

import { SavePlayListPayload } from 'entities/playlist/type';

import { fetchGetPlayList } from './PlayList';
import { fetchPostAddMusing } from './PlayListAdd ';
import { fetchGetPlayListDetail } from './PlayListDetail';
import { fetchPostModify } from './PlayListModify ';
import { fetchPostRemove } from './PlayListRemove';
import { fetchPostSave } from './PlayListSave';
import { fetchPostSaveAll } from './PlayListSaveAll';
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
  saveAll: (payload: SavePlayListPayload) => ({
    queryKey: ['save', payload.representative.listName],
    queryFn: () => fetchPostSaveAll(payload),
  }),

  remove: (playlistId: string, deleteVideoLinks: string[], body: { title: string; description: string }) => ({
    queryKey: ['modify', playlistId, deleteVideoLinks, body],
    queryFn: () => fetchPostModify(playlistId, deleteVideoLinks, body),
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
