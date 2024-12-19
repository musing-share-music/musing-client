import styled from '@emotion/styled';

import IconHeart from 'shared/assets/image/icons/icon-heart.svg?react';
import { MoreButton } from 'shared/ui/';

import CoverSrc from './cover.png';

export const MusicInfo = () => {
  const isConfirmed = true;
  return (
    <MusicInfoBox>
      <AdminBlock>
        <AdminConfirm>
          관리자 확인
          <ConfirmAlert isConfirmed={isConfirmed} />
        </AdminConfirm>
      </AdminBlock>

      <CoverBox>
        <CoverImg src={CoverSrc} />
      </CoverBox>

      <TrackDetailsBlock>
        <TrackDetails>
          <Box>
            <Title>Pink!</Title>
            <Artist>권진아</Artist>
          </Box>
          <MoreButton />
        </TrackDetails>
        <RateBlock></RateBlock>
      </TrackDetailsBlock>

      <ButtonBlock>
        <Button>
          <IconHeart />
          좋아요 <Count>(11)</Count>
        </Button>
        <Button>플레이리스트에 추가</Button>
      </ButtonBlock>

      <TagBlock>
        <Tag>K-POP</Tag> <Tag>귀여운</Tag> <Tag>K-POP</Tag> <Tag>귀여운</Tag>
      </TagBlock>
    </MusicInfoBox>
  );
};

const MusicInfoBox = styled.div`
  display: flex;
  width: 100%;
  padding: 24px 24px 26px;
  flex-direction: column;
  gap: 20px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors[600]};
  background: ${({ theme }) => theme.colors[700]};
`;

const AdminBlock = styled.div``;

const AdminConfirm = styled.div`
  display: flex;
  width: 120px;
  padding: 8px 8px 9px 14px;
  justify-content: center;
  align-items: center;
  gap: 7px;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors[600]};
  color: ${({ theme }) => theme.colors[100]};
  ${({ theme }) => theme.fonts.wantedSans.C1};
`;

const ConfirmAlert = styled.div<{ isConfirmed: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: ${({ theme, isConfirmed }) => (isConfirmed ? theme.colors.primary1 : theme.colors[300])};
`;

const CoverBox = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 6px;
  overflow: hidden;
`;

const CoverImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TrackDetailsBlock = styled.div``;

const TrackDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Title = styled.h1`
  margin: 0;
  ${({ theme }) => theme.fonts.wantedSans.B2};
  color: ${({ theme }) => theme.colors.white};
`;

const Artist = styled.p`
  margin: 0;
  ${({ theme }) => theme.fonts.wantedSans.B5};
  color: ${({ theme }) => theme.colors[200]};
`;

const RateBlock = styled.div``;

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Button = styled.button`
  display: flex;
  padding: 16px 0px;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors[400]};
  color: ${({ theme }) => theme.colors[100]};
  cursor: pointer;
`;

const Count = styled.span`
  color: ${({ theme }) => theme.colors[200]};
`;

const TagBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  flex-wrap: wrap;
`;

const Tag = styled.div`
  padding: 6px 10px 7px 10px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors[400]};
  color: ${({ theme }) => theme.colors.primary2};
  ${({ theme }) => theme.fonts.wantedSans.B6};
`;
