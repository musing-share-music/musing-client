import styled from '@emotion/styled';
import { useEffect, useMemo } from 'react';

import { useSelectGenre } from 'features/genre/selectMood/lib/useSelectMood';

import { useGetGenre } from 'entities/genre/api/useGetGenre';
import { Genre } from 'entities/genre/model/genre';
import { GenreChip } from 'entities/genre/ui';

import { SkeletonBox } from 'shared/ui';

interface GenreChipCheckboxProps {
  initialChecked?: Genre[];
  onSelectChip: (selectedGenre: Genre[]) => void;
}

/**
 * 장르 칩을 선택할 수 있는 체크박스
 */
export const GenreChipCheckbox = ({ initialChecked, onSelectChip }: GenreChipCheckboxProps) => {
  const { data: genre, isLoading, error } = useGetGenre();
  const { selectedGenreId, handleGenreCheck } = useSelectGenre(initialChecked);

  const selectedGenre: Genre[] = useMemo(
    () => genre?.filter((data) => selectedGenreId.includes(data.id)) || [],
    [genre, selectedGenreId],
  );

  useEffect(() => {
    if (selectedGenre.length) {
      onSelectChip(selectedGenre);
    }
  }, [onSelectChip, selectedGenre]);

  return (
    <ChipContainer>
      {(isLoading || error) &&
        Array(2)
          .fill(0)
          .map((_, idx) => <SkeletonBox key={idx} height={50} />)}

      {genre &&
        genre.length > 0 &&
        genre.map(({ id, genreName: text }) => (
          <GenreChip
            key={id}
            id={`genre-${id.toString()}`}
            text={text}
            name="genre"
            checked={!!selectedGenreId.find((val) => val === id)}
            onChange={(e) => {
              const { checked } = e.target;
              handleGenreCheck({ id: id, checked });
            }}
          />
        ))}
    </ChipContainer>
  );
};

const ChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 18px;
  row-gap: 20px;
`;
