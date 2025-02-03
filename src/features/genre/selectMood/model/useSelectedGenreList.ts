import { useMemo } from 'react';

import { useGetGenre } from 'entities/genre/api/useGetGenre';
import { Genre } from 'entities/genre/model/genre';

// 선택한 태그의 타입
type SelectedTag = { type: 'genre' } & Genre;

export const useSelectedGenreList = (selectedGenreId: number) => {
  const { data: genre } = useGetGenre();

  const selectedTagList: SelectedTag[] = useMemo(() => {
    const tag: SelectedTag[] = [];

    if (genre && genre.length > 0) {
      const selectedGenre = genre.find((g) => g.id === selectedGenreId);
      if (selectedGenre) {
        tag.push({ type: 'genre', ...selectedGenre });
      }
    }

    return tag;
  }, [genre, selectedGenreId]);

  return selectedTagList;
};
