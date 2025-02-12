import styled from '@emotion/styled';
import { useState } from 'react';

import { Genre } from 'entities/genre/model/genre';
import { Mood } from 'entities/mood/model/mood';

import { Button } from 'shared/ui/';
import { CommonTag } from 'shared/ui/Tag';

import { GenreMoodModal } from './GenreMoodModal';

type SelectedChip =
  | ({
      type: 'mood';
    } & Mood)
  | ({
      type: 'genre';
    } & Genre);

interface TagInputProps {
  onConfirm: ({ genre, mood }: { genre: number; mood: number[] }) => void;
}

export const TagInput = ({ onConfirm }: TagInputProps) => {
  const [open, setOpen] = useState(false);
  const [selectedTagList, setSelectedTagList] = useState<SelectedChip[]>([]);

  const handleConfirm = ({ mood, genre }: { mood: Mood[]; genre: Genre[] }) => {
    const tag: SelectedChip[] = [];
    genre.forEach((d) => {
      tag.push({ type: 'genre', ...d });
    });
    mood.forEach((m) => {
      tag.push({ type: 'mood', ...m });
    });
    setSelectedTagList(tag);

    const genreId = genre!.map((_genre) => _genre.id)[0];
    const moodId = mood!.map((_mood) => _mood.id);

    onConfirm({ genre: genreId, mood: moodId });
    setOpen(false);
  };

  return (
    <>
      <Box>
        <Label>
          {selectedTagList.map((val) => {
            if (val.type === 'genre') {
              return <CommonTag key={val.genreName} type="genre" name={val.genreName} />;
            } else {
              return <CommonTag key={val.moodName} type="mood" name={val.moodName} />;
            }
          })}
        </Label>
        <Button type="button" variant="outlined" onClick={() => setOpen(true)}>
          장르 및 분위기 추가
        </Button>
      </Box>
      <GenreMoodModal open={open} onClose={() => setOpen(false)} onConfirm={handleConfirm} />
    </>
  );
};

const Box = styled.div`
  display: flex;
  gap: 20px;
`;

const Label = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  width: 490px;
  height: 64px;
  padding: 18px 26px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors[400]};
  background: ${({ theme }) => theme.colors[600]};
  color: ${({ theme }) => theme.colors[200]};
`;
