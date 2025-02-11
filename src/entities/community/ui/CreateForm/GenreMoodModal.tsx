import styled from '@emotion/styled';
import { useState } from 'react';

import { validateTag } from 'features/community/createPost/lib/validate';
import { GenreChipCheckbox } from 'features/genre/selectMood/ui';
import { MoodChipCheckbox } from 'features/mood/selectMood/ui';

import { Genre } from 'entities/genre/model/genre';
import { Mood } from 'entities/mood/model/mood';

import { Button, Modal } from 'shared/ui/';

interface GenreMoodModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: ({ genre, mood }: { genre: Genre[]; mood: Mood[] }) => void;
}

export const GenreMoodModal = ({ open, onClose, onConfirm }: GenreMoodModalProps) => {
  const [selectedGenre, setSelectedGenre] = useState<Genre[]>([]);
  const [selectedMood, setSelectedMood] = useState<Mood[]>([]);

  const selectMoodChip = (mood: Mood[]) => {
    setSelectedMood(mood);
  };
  const selectGenreChip = (genre: Genre[]) => {
    setSelectedGenre(genre);
  };

  const handleConfirm = () => {
    if (!validateTag({ selectedGenre, selectedMood })) {
      window.alert('장르 1개, 분위기 1개 이상을 선택해 주세요.'); // TODO alert이 아닌 message로 개선
      return;
    }

    onConfirm({ mood: selectedMood, genre: selectedGenre });
  };

  return (
    <Modal open={open} onClose={onClose}>
      <ModalContainer>
        <ModalHeader>
          <TitleBlock>
            <Modal.Title>곡 제목 · 아티스트 명</Modal.Title>
            <Caption>해당 곡과 어울리는 장르 및 분위기를 선택해 주세요.</Caption>
          </TitleBlock>
          <Modal.CloseButton onClose={onClose} />
        </ModalHeader>

        <ChipBlock>
          <ChipCaption>장르</ChipCaption>
          <GenreChipCheckbox initialChecked={selectedGenre} onSelectChip={selectGenreChip} />
        </ChipBlock>
        <ChipBlock>
          <ChipCaption>분위기</ChipCaption>
          <MoodChipCheckbox initialChecked={selectedMood} onSelectChip={selectMoodChip} />
        </ChipBlock>

        <ButtonBlock>
          <RequiredCaption>장르 1개, 분위기 1개 이상을 선택해 주세요.</RequiredCaption>
          <ButtonBox>
            <Button variant="primary" onClick={handleConfirm}>
              첨부
            </Button>
          </ButtonBox>
        </ButtonBlock>
      </ModalContainer>
    </Modal>
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
  width: 100%;
`;

const ChipCaption = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.B3};
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
