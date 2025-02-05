import { useMemo, useState } from 'react';

import { updateCheckedSet } from 'features/community/createPost/lib/updateCheckedSet';

import { GENRE, Genre, GenreId } from 'entities/genre/model/genre';
import { MOOD, Mood, MoodId } from 'entities/mood/model/mood';

import { SelectTagId } from './tag';

export const useTagInput = () => {
  const [selectedGenreId, setSelectedGenreId] = useState<GenreId>();
  const [selectedMoodId, setSelectedMoodId] = useState<Set<MoodId>>(new Set());
  const [selectedTagId, setSelectedTagId] = useState<SelectTagId[]>([]); // 선택한 순서대로 태그의 아이디를 저장한다.

  const handleGenreCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;

    if (checked) {
      setSelectedTagId((prev) => [...prev, { type: 'genre', id }]);
      setSelectedGenreId(id);
    } else {
      const copiedPrev = selectedTagId?.filter((val) => {
        if (val.type === 'genre') {
          return;
        }
        return val;
      });
      setSelectedTagId(copiedPrev);
    }
  };

  const handleMoodCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;

    if (checked) {
      setSelectedTagId((prev) => [...prev, { type: 'mood', id }]);
    } else {
      const copiedPrev = selectedTagId?.filter((val) => {
        if (val.type === 'mood' && val.id === id) {
          return;
        }
        return val;
      });
      setSelectedTagId(copiedPrev);
    }

    updateCheckedSet(e, setSelectedMoodId);
  };

  // 선택한 장르, 무드 tag
  const selectedTags: (Genre | Mood)[] = useMemo(() => {
    const updatedTags = selectedTagId.map((selectedTag) => {
      if (selectedTag.type === 'genre') {
        return GENRE.find((val) => val.id === selectedTag.id);
      }
      if (selectedTag.type === 'mood') {
        return MOOD.find((val) => val.id === selectedTag.id);
      }
    }) as (Genre | Mood)[];
    return updatedTags;
  }, [selectedTagId]);

  return { handleGenreCheck, handleMoodCheck, selectedTags, selectedGenreId, selectedMoodId };
};
