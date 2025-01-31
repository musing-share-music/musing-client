import styled from '@emotion/styled';
import { useMemo, useState } from 'react';

import { validateTag } from 'features/community/createPost/lib/validate';
import { useTagInput } from 'features/community/createPost/model/useTagInput';

import { Genre, GENRE } from 'entities/genre/model/genre';
import { Mood, MOOD } from 'entities/mood/model/mood';

import { Button, CheckBox, Modal } from 'shared/ui/';

interface TagInputProps {
  onConfirm: ({ genre, mood }: { genre: string; mood: string[] }) => void;
}

export const TagInput = ({ onConfirm }: TagInputProps) => {
  const [open, setOpen] = useState(false);
  const { handleGenreCheck, handleMoodCheck, selectedTags, selectedGenreId, selectedMoodId } = useTagInput();

  // 선택한 장르 태그
  const selectedGenre: Genre[] | null = useMemo(() => {
    if (selectedGenreId) {
      return GENRE.filter((val) => val.id === selectedGenreId) as Genre[];
    }
    return null;
  }, [selectedGenreId]);

  // 선택한 분위기 태그
  const selectedMood: Mood[] = useMemo(() => {
    return Array(...selectedMoodId)
      .map((moodId) => MOOD.find((val) => val.id === moodId))
      .filter((mood): mood is Mood => mood !== undefined);
  }, [selectedMoodId]);

  const handleConfirm = () => {
    if (!validateTag({ selectedGenre, selectedMood })) return;

    const genre = selectedGenre!.map((_genre) => _genre.text)[0];
    const mood = selectedMood!.map((_mood) => _mood.text);

    onConfirm({ genre, mood });
    setOpen(false);
  };

  return (
    <>
      <Box>
        <Label>{selectedTags.map((val) => val.text)}</Label>
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
                  checked={selectedGenreId === id}
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
                  checked={selectedMoodId.has(id)}
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
