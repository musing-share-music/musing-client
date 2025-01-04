import styled from '@emotion/styled';
import { useState } from 'react';

import { validateTag } from 'features/musicRecommendationBoard/lib/validate';
import { useTagInput } from 'features/musicRecommendationBoard/model/useTagInput';

import { Genre, GENRE } from 'entities/genre/model/genre';
import { MOOD, Mood } from 'entities/mood/model/mood';

import { Button, CheckBox, Modal } from 'shared/ui/';

interface TagInputProps {
  onConfirm: (tags: (Genre | Mood)[]) => void;
}

export const TagInput = ({ onConfirm }: TagInputProps) => {
  const [open, setOpen] = useState(false);
  const { handleGenreCheck, handleMoodCheck, selectedTags, selectedGenres, selectedMoods } = useTagInput();

  const handleConfirm = () => {
    if (validateTag({ selectedGenres, selectedMoods })) return;
    onConfirm(selectedTags);
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
