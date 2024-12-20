import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import IconHeart from 'shared/assets/image/icons/icon-heart.svg?react';
import { commonStyles } from 'shared/styles/common';
import { MoreButton } from 'shared/ui/';

import CoverSrc from './cover.png';

export const MusicInfo = () => {
  const theme = useTheme();
  const isConfirmed = true;
  const isLiked = false;
  const color = isLiked ? theme.colors.primary1 : theme.colors[200];
  return (
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
          <MoreButton />
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
        `};
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
