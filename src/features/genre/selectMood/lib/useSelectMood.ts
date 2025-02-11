import { useState } from 'react';

import { Genre, GenreId } from 'entities/genre/model/genre';

export const useSelectGenre = (initialSelected?: Genre[]) => {
  const [selectedGenreId, setSelectedGenreId] = useState<GenreId[]>(() => {
    return initialSelected?.map((v) => v.id).filter((v) => v) || [];
  });

  const handleGenreCheck = ({ id, checked }: { id: number; checked: boolean }) => {
    if (checked) {
      setSelectedGenreId((prev) => {
        return [...prev, id];
      });
    } else {
      setSelectedGenreId((prev) => {
        return prev.filter((genreIdh) => genreIdh !== id);
      });
    }
  };

  return { handleGenreCheck, selectedGenreId };
};
