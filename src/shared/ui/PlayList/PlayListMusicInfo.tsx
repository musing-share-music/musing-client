import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

import IconHeart from 'shared/assets/image/icons/icon-heart.svg?react';
import IconTooltip from 'shared/assets/image/icons/icon-tooltip.svg?react';
import CoverSrc from 'shared/assets/image/main/image1.png';
import { commonStyles } from 'shared/styles/common';

import { DeleteReviewModal } from './DeleteReviewModal';

export const PlayListMusicInfo = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const isLiked = false;
  const color = isLiked ? theme.colors.primary1 : theme.colors[200];

  return (
    <>
      <MusicInfoBox>
        <CoverBox>
          <CoverImg src={CoverSrc} />
        </CoverBox>

        <TrackDetailsBlock>
          <TrackDetails>
            <Box>
              <Title>Pink!</Title>
              <Artist>플레이리스트 설명!입니다. 플레이리스트 소개 기입 가능 네 줄까지만 보여지도록</Artist>
            </Box>
            {/* <MoreButton menuItem={menuItem} /> */}
          </TrackDetails>
          <RateBlock></RateBlock>
        </TrackDetailsBlock>

        <ButtonBlock>
          <LikeButton isLiked={isLiked}>
            <IconHeart fill={color} />
            좋아요
            <Count color={color}>(11)</Count>
          </LikeButton>
          <Button>플레이리스트에 추가</Button>
        </ButtonBlock>

        <AdminBlock>
          <AdminConfirm>
            갱신하기
            <IconTooltip></IconTooltip>
            <ToolTip>
              플레이리스트가 실제 유튜브와 <br></br> 일치하지 않는다면 갱신하기를 눌러 주세요.
            </ToolTip>
          </AdminConfirm>

          <AdminEdit>
            <EditAction>수정</EditAction>
            <EditAction
              onClick={() => {
                setOpen(true);
              }}
            >
              삭제
            </EditAction>
            <DeleteReviewModal open={open} onClose={() => setOpen(false)} onConfirm={() => {}} />
          </AdminEdit>
        </AdminBlock>
      </MusicInfoBox>
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

const AdminBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ToolTip = styled.div`
  opacity: 0;
  position: absolute;
  left: 0;
  transform: translate(10%, 90%);
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

const AdminEdit = styled.div`
  width: 72px;
  height: 20px;
  display: flex;
  gap: 8px;
`;

const EditAction = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.C1};
  color: ${({ theme }) => theme.colors[200]};
  cursor: pointer;
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
  &:hover {
    background: ${({ theme }) => theme.colors[300]};
  }
  &:active {
    background: transparent;
  }
  ${commonStyles.hoverTransition}
`;

const Count = styled.span<{ color: string }>`
  color: ${({ color }) => color};
`;

const LikeButton = styled(Button)<{ isLiked: boolean }>`
  ${({ isLiked, theme }) =>
    isLiked
      ? css`
          color: ${theme.colors.primary1};
          border: 1px solid ${theme.colors.primary1};
          // hover 스타일 제거
          &:hover {
            background: transparent;
          }
        `
      : css`
          &:hover {
            ${Count} {
              color: ${theme.colors.primary1};
            }
            svg path {
              fill: ${theme.colors.primary1};
            }
          }
          &:active {
            color: ${theme.colors.primary2};
            border-color: ${theme.colors.primary2};
            ${Count} {
              color: ${theme.colors.primary2};
            }
            svg path {
              fill: ${theme.colors.primary2};
            }
          }
        `};
`;
