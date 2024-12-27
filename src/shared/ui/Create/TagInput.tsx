import styled from '@emotion/styled';
import { useMemo, useState } from 'react';

import { Genre, GENRE } from 'shared/types/genre';
import { MOOD, Mood } from 'shared/types/mood';
import { Button, CheckBox, Modal } from 'shared/ui/';

type GenreId = Genre['id'];
type MoodId = Mood['id'];

interface TagInputProps {
  onConfirm: (tags: (Genre | Mood)[]) => void;
}

const handleCheck = <T extends string>(
  e: React.ChangeEvent<HTMLInputElement>,
  updateState: React.Dispatch<React.SetStateAction<Set<T>>>,
) => {
  const { id, checked } = e.target;

  updateState((prev) => {
    const updatedSet = new Set(prev);

    if (checked) {
      updatedSet.add(id as T);
    } else {
      updatedSet.delete(id as T);
    }

    return updatedSet;
  });
};

type SelectTagId = {
  type: 'genre' | 'mood';
  id: GenreId | MoodId;
};

export const TagInput = ({ onConfirm }: TagInputProps) => {
  const [open, setOpen] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState<Set<GenreId>>(new Set());
  const [selectedMoods, setSelectedMoods] = useState<Set<MoodId>>(new Set());
  const [selectedTagId, setSelectedTagId] = useState<SelectTagId[]>([]); // 선택한 순서대로 태그의 아이디를 저장한다.

  const handleGenreCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;

    if (checked) {
      setSelectedTagId((prev) => [...prev, { type: 'genre', id }]);
    } else {
      const copiedPrev = selectedTagId?.filter((val) => {
        if (val.type === 'genre' && val.id === id) {
          return;
        }
        return val;
      });
      setSelectedTagId(copiedPrev);
    }

    handleCheck(e, setSelectedGenres);
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

    handleCheck(e, setSelectedMoods);
  };

  // 선택한 장르, 무드 tag
  const tags: (Genre | Mood)[] = useMemo(() => {
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

  const handleConfirm = () => {
    // 최소 1개 이상 태그를 선택
    if (selectedMoods.size === 0 || selectedGenres.size === 0) return;
    onConfirm(tags);
    setOpen(false);
  };

  return (
    <>
      <Box>
        <Label>{tags.map((val) => val.text)}</Label>
        <Button type="button" variant="outlined" onClick={() => setOpen(true)}>
          장르 및 분위기 추가
        </Button>
      </Box>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalContainer>
          <ModalHeader>
            <TitleBlock>
              <Modal.Title>곡 제목 · 아티스트 명</Modal.Title>
              <Caption>해당 곡과 어울리는 장르 및 분위기를 선택해 주세요.</Caption>
            </TitleBlock>
            <Modal.CloseButton onClose={() => setOpen(false)} />
          </ModalHeader>

          <ChipBlock>
            <ChipCaption>장르</ChipCaption>
            <ChipContainer>
              {GENRE.map(({ id, text }) => (
                <CheckBox
                  key={id}
                  id={id}
                  text={text}
                  name={id}
                  checked={selectedGenres.has(id)}
                  onChange={handleGenreCheck}
                />
              ))}
            </ChipContainer>
          </ChipBlock>

          <ChipBlock>
            <ChipCaption>분위기</ChipCaption>
            <ChipContainer>
              {MOOD.map(({ id, text }) => (
                <CheckBox
                  key={id}
                  id={id}
                  text={text}
                  name={id}
                  checked={selectedMoods.has(id)}
                  onChange={handleMoodCheck}
                />
              ))}
            </ChipContainer>
          </ChipBlock>

          <ButtonBlock>
            <RequiredCaption>각 최소 1개 이상의 태그를 선택해 주세요.</RequiredCaption>
            <ButtonBox>
              <Button variant="primary" onClick={handleConfirm}>
                첨부
              </Button>
            </ButtonBox>
          </ButtonBlock>
        </ModalContainer>
      </Modal>
    </>
  );
};

const RequiredCaption = styled.p`
  color: ${({ theme }) => theme.colors.primary2};
  ${({ theme }) => theme.fonts.wantedSans.B5};
`;

const ChipBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 8px;
`;

const ChipCaption = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.B3};
`;

const ChipContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 18px;
  row-gap: 20px;
`;

const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Caption = styled.p`
  color: ${({ theme }) => theme.colors[100]};
  ${({ theme }) => theme.fonts.wantedSans.B3};
`;

const Box = styled.div`
  display: flex;
  gap: 20px;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  width: 490px;
  height: 64px;
  padding: 18px 26px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors[400]};
  background: ${({ theme }) => theme.colors[600]};
  color: ${({ theme }) => theme.colors[200]};
`;

const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

const ButtonBox = styled.div`
  width: 163px;
`;

const ModalContainer = styled.div`
  display: flex;
  width: 998px;
  padding: 36px 44px 44px 44px;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors[400]};
  background: ${({ theme }) => theme.colors[600]};
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
