import styled from '@emotion/styled';
import { useState } from 'react';

import { GenreChipCheckbox } from 'features/genre/selectMood/ui';
import { MoodChipCheckbox } from 'features/mood/selectMood/ui';

import { Genre } from 'entities/genre/model/genre';
import { Mood } from 'entities/mood/model/mood';

import Arrowdown from 'shared/assets/image/icons/icon-arrowdown.svg?react';
import image1 from 'shared/assets/image/main/image1.png';
import { commonStyles } from 'shared/styles/common';
import { Chip, Modal, TextInput } from 'shared/ui/';

type ModalType = 'genre' | 'mood' | 'artist' | null;
type Artist = string;

interface TagInputProps {
  onConfirm: (tags: (Genre | Mood)[]) => void;
}

export const MemberPreference = ({ onConfirm }: TagInputProps) => {
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([]);
  const [selectedMoods, setSelectedMoods] = useState<Mood[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [artist, setArtist] = useState<Set<Artist>>(new Set());

  const handleMoodCheck = (mood: Mood[]) => {
    setSelectedMoods(mood);
  };

  const handleGenreCheck = (genre: Genre[]) => {
    setSelectedGenres(genre);
  };

  const openModal = (type: ModalType) => {
    setModalType(type);
    setOpen(true);
  };

  const closeModal = () => {
    setModalType(null);
    setOpen(false);
  };

  const handleConfirm = () => {
    if (modalType === 'genre' && selectedGenres.length === 0) return;
    if (modalType === 'mood' && selectedMoods.length === 0) return;

    const tags = [...selectedGenres, ...selectedMoods];
    onConfirm(tags);
    closeModal();
  };

  const addArtist = (artist: Artist) => {
    if (!artist.trim()) return;

    setArtist((prev) => {
      const updatedArtist = new Set(prev);

      // TODO 이미 추가된 경우
      updatedArtist.add(artist);

      return updatedArtist;
    });
  };

  const deleteArtist = (artist: Artist) => {
    setArtist((prev) => {
      const updatedArtist = new Set(prev);
      updatedArtist.delete(artist);

      return updatedArtist;
    });
  };

  return (
    <MemberInfoContainer>
      <MemberInfoBox>
        <MemberInfoWrapper>
          <MemberInfoImg src={image1}></MemberInfoImg>
          <MemverInfoContent>
            <MemberInfoName>taeri</MemberInfoName>
            <MemberInfoEmail>taeri@gmail.com</MemberInfoEmail>
          </MemverInfoContent>
        </MemberInfoWrapper>
        <BlockButton>차단</BlockButton>
      </MemberInfoBox>

      <MemberPreferBox>
        <GenrePreferBlock>
          <GenrePreference>
            <PreferTitle>나의 선호 장르</PreferTitle>
            <PreferTagWrapper>
              <PreferTag>힙합</PreferTag>
              <PreferTag>슈게이징</PreferTag>
              <PreferTag>인디</PreferTag>
              <PreferTag>록</PreferTag>
              <PreferTag>메탈</PreferTag>
              <Arrowdown></Arrowdown>
            </PreferTagWrapper>
          </GenrePreference>
          <PreferButton onClick={() => openModal('genre')}>수정</PreferButton>
        </GenrePreferBlock>
      </MemberPreferBox>

      <MemberPreferBox>
        <GenrePreferBlock>
          <GenrePreference>
            <PreferTitle>나의 선호 분위기</PreferTitle>
            <PreferTagWrapper>
              <PreferTag>시끄러운</PreferTag>
              <PreferTag>힙한</PreferTag>
              <Arrowdown></Arrowdown>
            </PreferTagWrapper>
          </GenrePreference>
          <PreferButton onClick={() => openModal('mood')}>수정</PreferButton>
        </GenrePreferBlock>
      </MemberPreferBox>

      <MemberPreferBox>
        <GenrePreferBlock>
          <GenrePreference>
            <PreferTitle>나의 선호 아티스트</PreferTitle>
            <PreferTagWrapper>
              <PreferTag>시끄러운</PreferTag>
              <PreferTag>힙한</PreferTag>
              <Arrowdown></Arrowdown>
            </PreferTagWrapper>
          </GenrePreference>
          <PreferButton onClick={() => openModal('artist')}>수정</PreferButton>
        </GenrePreferBlock>
      </MemberPreferBox>

      <Modal open={open} onClose={closeModal}>
        <ModalContainer>
          <ModalHeader>
            <TitleBlock>
              <Caption>
                {modalType === 'genre' && '선호하는 장르를 선택해 주세요.'}
                {modalType === 'mood' && '선호하는 분위기를 선택해 주세요.'}
                {modalType === 'artist' && '선호하는 아티스트를 추가해 주세요.'}
              </Caption>
            </TitleBlock>
            <Modal.CloseButton onClose={closeModal} />
          </ModalHeader>

          {modalType === 'genre' && (
            <ChipBlock>
              <GenreChipCheckbox onSelectChip={handleGenreCheck} />
            </ChipBlock>
          )}

          {modalType === 'mood' && (
            <ChipBlock>
              <MoodChipCheckbox onSelectChip={handleMoodCheck} />
            </ChipBlock>
          )}

          {modalType === 'artist' && (
            <>
              <TextInput
                placeholder="아티스트명을 입력해주세요."
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    if (e.nativeEvent.isComposing) return; // 한글 입력시, 마지막 글자가 추가되는 현상 방지
                    addArtist(inputValue);
                    setInputValue('');
                  }
                }}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <ChipBlock>
                {Array.from(artist).map((artistItem) => (
                  <Chip
                    key={artistItem}
                    text={artistItem}
                    onDelete={() => {
                      deleteArtist(artistItem);
                    }}
                  />
                ))}
              </ChipBlock>
            </>
          )}

          <ButtonBlock>
            <RequiredCaption>최소 1개 이상의 태그를 선택해 주세요.</RequiredCaption>
            <ButtonBox>
              <PreferButton onClick={handleConfirm}>수정</PreferButton>
            </ButtonBox>
          </ButtonBlock>
        </ModalContainer>
      </Modal>
    </MemberInfoContainer>
  );
};

const MemberInfoContainer = styled.div`
  width: 1200px;
`;

const MemberInfoBox = styled.div`
  width: 1200px;
  height: 132px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;

const MemberInfoWrapper = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`;

const MemberInfoImg = styled.img`
  width: 132px;
  height: 132px;
  border-radius: 36px;
  border: 3px solid ${({ theme }) => theme.colors[300]};
`;

const MemverInfoContent = styled.div`
  width: 272px;
  height: 88px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const MemberInfoName = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.H1};
  color: ${({ theme }) => theme.colors.white};
`;

const MemberInfoEmail = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.T2};
  color: ${({ theme }) => theme.colors[200]};
`;

const BlockButton = styled.button`
  width: 132px;
  height: 64px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.secondary1};
  ${({ theme }) => theme.fonts.wantedSans.B3};
  color: ${({ theme }) => theme.colors.secondary1};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors[300]};
  }
  ${commonStyles.hoverTransition}
`;

const MemberPreferBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 80px;
`;

const GenrePreferBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const GenrePreference = styled.div`
  width: 1068px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const PreferTitle = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.T2};
  color: ${({ theme }) => theme.colors.white};
`;

const PreferTagWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const PreferTag = styled.label`
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors[500]};
  ${({ theme }) => theme.fonts.wantedSans.B5};
  color: ${({ theme }) => theme.colors.white};
`;

const PreferButton = styled.button`
  width: 132px;
  height: 64px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary2};
  ${({ theme }) => theme.fonts.wantedSans.B3};
  color: ${({ theme }) => theme.colors.primary2};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors[300]};
  }
  ${commonStyles.hoverTransition}
`;

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

// const ChipCaption = styled.p`
//   color: ${({ theme }) => theme.colors.white};
//   ${({ theme }) => theme.fonts.wantedSans.B3};
// `;

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
