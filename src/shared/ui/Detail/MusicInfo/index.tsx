import styled from '@emotion/styled';
import { useState } from 'react';

import { Button } from 'shared/ui/Button';
import CoverSrc from 'shared/ui/Detail/cover.png';
import { DeleteReviewModal } from 'shared/ui/Detail/DeleteReviewModal';
import { MoreButton } from 'shared/ui/Detail/MoreButton';

import { LikeButton } from './LikeButton';

export const MusicInfo = () => {
  const [open, setOpen] = useState(false);
  const isConfirmed = true;

  const menuItem = [
    {
      content: '리뷰 삭제',
      onClick: () => {
        setOpen(true);
      },
    },
  ];

  return (
    <>
      <MusicInfoBox>
        <AdminBlock>
          <AdminConfirm>
            관리자 확인
            <ConfirmAlert isConfirmed={isConfirmed} />
            <ToolTip>관리자 확인이 완료될 시 좋아요가 알고리즘에 반영돼요.</ToolTip>
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
            <MoreButton menuItem={menuItem} />
          </TrackDetails>
          <RateBlock></RateBlock>
        </TrackDetailsBlock>

        <ButtonBlock>
          <LikeButton />
          <Button variant="outlined">플레이리스트에 추가</Button>
        </ButtonBlock>

        <TagBlock>
          <Tag>K-POP</Tag> <Tag>귀여운</Tag> <Tag>K-POP</Tag> <Tag>귀여운</Tag>
        </TagBlock>
      </MusicInfoBox>

      <DeleteReviewModal open={open} onClose={() => setOpen(false)} onConfirm={() => {}} />
    </>
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

const ToolTip = styled.div`
  opacity: 0;
  position: absolute;
  left: 0;
  transform: translate(0, -100%);
  padding: 16px 20px 18px 20px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors[400]};
  background: ${({ theme }) => theme.colors[600]};
  box-shadow: 0px 0px 10px 0px rgba(20, 20, 22, 0.64);
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.B6};
  white-space: nowrap;
`;

const AdminConfirm = styled.div`
  position: relative;
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

  &:hover ${ToolTip} {
    opacity: 1;
  }
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
