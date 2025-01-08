import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

import IconHeart from 'shared/assets/image/icons/icon-heart.svg?react';
import IconMusic from 'shared/assets/image/icons/icon-music.svg?react';
import thumnail from 'shared/assets/image/main/thumnail.png';
import { commonStyles } from 'shared/styles/common';

const ThumContainer = styled.div`
  width: 1280px;
  height: 360px;
  display: flex;
  gap: 24px;
`;

const ThumTitleImage = styled.img`
  background-image: url(${(props) => props.src});
`;

const ThumMemberInfoContainer = styled.div`
  width: 408px;
  height: 360px;
  padding: 16px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors[600]};
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ThumSelectBlock = styled.div<{ open: boolean }>`
  width: 376px;
  border-radius: 6px;
  display: flex;
  justify-content: center;

  ${({ open, theme }) =>
    !open
      ? css`
          height: 52px;
          border: 1px solid ${theme.colors[400]};
        `
      : css`
          height: 136px;
          background-color: ${theme.colors[500]};
          color: ${theme.colors.white};
          flex-direction: column;
        `}
`;

const ThumSelectBox = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: center;
`;

const ThumSelectTitle = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B6};
  color: ${({ theme }) => theme.colors.primary2};
`;

const ThumSelectDescription = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B6};
  color: ${({ theme }) => theme.colors.white};
`;

const CustomHr = styled.hr`
  width: 344px;
  border: 1px solid ${({ theme }) => theme.colors[400]};
  margin-top: 16px;
  margin-bottom: 16px;
`;

const ThumSelectPost = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B6};
  color: ${({ theme }) => theme.colors.white};
  width: 345px;
  margin-left: auto;
  margin-right: auto;
`;

const Arrow = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
`;

const ThumMemberInfoBlock = styled.div`
  width: 376px;
  height: 260px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors[400]};
`;

const ThumMemberInfoWrapper = styled.div`
  width: 328px;
  height: 130px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ThumMemberInfo = styled.div`
  width: 100%;
  height: 60px;
  padding: 20px 24px;
`;

const ThumMemberName = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B3};
  color: ${({ theme }) => theme.colors.white};
`;

const ThumMemberEmail = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B5};
  color: ${({ theme }) => theme.colors[200]};
`;

const MusicStats = styled.div`
  width: 100%;
  height: 58px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PlayListBlock = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const LikeBlock = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const Count = styled.span`
  ${({ theme }) => theme.fonts.wantedSans.C1};
  color: ${({ theme }) => theme.colors[100]};
`;

const ButtonBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 24px;
  margin-top: 22px;
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

const ThumbnailMusic = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const isLiked = true;
  const color = isLiked ? theme.colors.primary1 : theme.colors[200];
  return (
    <ThumContainer>
      <ThumTitleImage src={thumnail}></ThumTitleImage>

      <ThumMemberInfoContainer>
        <ThumSelectBlock open={open}>
          <ThumSelectBox>
            <ThumSelectTitle>공지사항</ThumSelectTitle>
            <ThumSelectDescription>올바른 커뮤니티 문화를 지향해요.</ThumSelectDescription>
            <Arrow
              onClick={() => {
                setOpen(!open);
              }}
            >
              {open ? '▲' : '▼'}
            </Arrow>
          </ThumSelectBox>

          {open && (
            <>
              <CustomHr />
              <ThumSelectPost>
                뮤징은 올바른 커뮤니티 문화를 지향하고 있어요. 타인을 향한 비방이나 비속어는 삼가 주세요.
              </ThumSelectPost>
            </>
          )}
        </ThumSelectBlock>

        {!open && (
          <ThumMemberInfoBlock>
            <ThumMemberInfoWrapper>
              <ThumMemberInfo>
                <ThumMemberName>김태리님</ThumMemberName>
                <ThumMemberEmail>taeri@gmail.com</ThumMemberEmail>
              </ThumMemberInfo>
              <MusicStats>
                <LikeBlock>
                  <IconHeart fill={color} />
                  <Count color={color}>좋아요한 음악 21</Count>
                </LikeBlock>
                <PlayListBlock>
                  <IconMusic fill={color} />
                  <Count color={color}>나의 플레이리스트 5</Count>
                </PlayListBlock>
              </MusicStats>
            </ThumMemberInfoWrapper>
            <ButtonBlock>
              <Button>회원 정보</Button>
            </ButtonBlock>
          </ThumMemberInfoBlock>
        )}
      </ThumMemberInfoContainer>
    </ThumContainer>
  );
};

export default ThumbnailMusic;
