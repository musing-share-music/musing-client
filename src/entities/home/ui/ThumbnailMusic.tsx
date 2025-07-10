import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { NoticeDto } from 'entities/home/model/types';

import GoogleLogin from 'shared/assets/image/google_login.png';
import IconHeart from 'shared/assets/image/icons/icon-heart.svg?react';
import IconMusic from 'shared/assets/image/icons/icon-music.svg?react';
import thumnail from 'shared/assets/image/main/thumnail.png';
import { ROUTES } from 'shared/config/routes';
import URL from 'shared/config/urls';
import { useUserInfoStore } from 'shared/store/userInfo';
import { commonStyles } from 'shared/styles/common';

interface NoticeDtoProps {
  noticeDto: NoticeDto;
}

const ThumbnailMusic = ({ noticeDto }: NoticeDtoProps) => {
  const navigate = useNavigate();
  const { userInfo, isLogin } = useUserInfoStore();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const isLiked = true;
  const color = isLiked ? theme.colors.primary1 : theme.colors[200];

  const fetchLogin = () => {
    window.location.href = URL.GOOGLELOGIN;
  };

  return (
    <ThumContainer>
      <ThumTitleImage src={thumnail}></ThumTitleImage>

      <ThumMemberInfoContainer>
        <ThumSelectBlock open={open}>
          <ThumSelectBox open={open}>
            <ThumSelectTitle open={open}>공지사항</ThumSelectTitle>
            <ThumSelectDescription open={open}>{noticeDto.title}</ThumSelectDescription>
            <Arrow
              open={open}
              onClick={() => {
                setOpen(!open);
              }}
            >
              {open ? '▲' : '▼'}
            </Arrow>
          </ThumSelectBox>

          {open && (
            <>
              <CustomHr open={open} />
              <ThumSelectPost open={open}>
                {noticeDto.content.split('\n').map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </ThumSelectPost>
            </>
          )}
        </ThumSelectBlock>

        {!open && isLogin() && (
          <ThumMemberInfoBlock>
            <ThumMemberInfoWrapper>
              <ThumMemberInfo>
                <ThumMemberName>{userInfo.name}님</ThumMemberName>
                <ThumMemberEmail>{userInfo.email}</ThumMemberEmail>
              </ThumMemberInfo>
              <MusicStats>
                <LikeBlock>
                  <IconHeart fill={color} />
                  <Count color={color}>좋아요한 음악 {userInfo.likeMusicCount}</Count>
                </LikeBlock>
                <PlayListBlock>
                  <IconMusic fill={color} />
                  <Count color={color}>나의 플레이리스트 {userInfo.myPlaylistCount}</Count>
                </PlayListBlock>
              </MusicStats>
            </ThumMemberInfoWrapper>
            <ButtonBlock>
              <Button
                onClick={async () => {
                  await navigate(`${ROUTES.MEMBERINFO.MEMBERINFO}`);
                }}
              >
                회원 정보
              </Button>
            </ButtonBlock>
          </ThumMemberInfoBlock>
        )}

        {!open && !isLogin() && (
          <ThumMemberInfoBlock>
            <LoginBlock>
              <LoginGuide>뮤징이 처음이라면?</LoginGuide>
              <LoginGuide>가입 후 음악 탐색하기 👀</LoginGuide>
            </LoginBlock>
            <ButtonBlock>
              <LoginButton onClick={fetchLogin}>
                <img src={GoogleLogin} alt="Google Login" />
                구글 계정으로 로그인
              </LoginButton>
            </ButtonBlock>
          </ThumMemberInfoBlock>
        )}
      </ThumMemberInfoContainer>
    </ThumContainer>
  );
};

export default ThumbnailMusic;

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
  position: relative;

  ${({ open, theme }) =>
    !open
      ? css`
          height: 52px;
          border: 1px solid ${theme.colors[400]};
        `
      : css`
          height: 330px;
          min-height: 100px;
          background-color: ${theme.colors[500]};
          color: ${theme.colors.white};
          flex-direction: column;
        `}
`;

const ThumSelectBox = styled.div<{ open: boolean }>`
  ${({ open }) =>
    !open
      ? css`
          display: flex;
          align-items: center;
        `
      : css`
          position: relative;
        `}
`;

const ThumSelectTitle = styled.div<{ open: boolean }>`
  ${({ theme }) => theme.fonts.wantedSans.B6};
  color: ${({ theme }) => theme.colors.primary2};
  position: absolute;

  ${({ open }) =>
    !open
      ? css`
          left: 16px;
        `
      : css`
          left: 16px;
          top: 16px;
        `}
`;

const ThumSelectDescription = styled.div<{ open: boolean }>`
  ${({ theme }) => theme.fonts.wantedSans.B6};
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  left: 90px;

  ${({ open }) =>
    !open
      ? css``
      : css`
          top: 16px;
        `}
`;

const CustomHr = styled.div<{ open: boolean }>`
  width: 344px;
  border: 1px solid ${({ theme }) => theme.colors[400]};
  left: 16px;

  ${({ open }) =>
    !open
      ? css``
      : css`
          position: absolute;
          top: 52px;
        `}
`;

const ThumSelectPost = styled.div<{ open: boolean }>`
  ${({ theme }) => theme.fonts.wantedSans.B6};
  color: ${({ theme }) => theme.colors.white};
  width: 345px;
  margin-left: auto;
  margin-right: auto;

  display: -webkit-box;
  -webkit-line-clamp: 12;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  ${({ open }) =>
    !open
      ? css``
      : css`
          position: absolute;
          top: 68px;
          left: 16px;
        `}
`;

const Arrow = styled.div<{ open: boolean }>`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  right: 16px;
  cursor: pointer;

  ${({ open }) =>
    !open
      ? css``
      : css`
          position: absolute;
          top: 16px;
          right: 16px;
        `}
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

const LoginButton = styled.button`
  display: flex;
  padding: 16px 0px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors[400]};
  ${({ theme }) => theme.fonts.wantedSans.B3};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors[300]};
  }
  ${commonStyles.hoverTransition}
`;

const LoginBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: 66px;
  margin-top: 49px;
`;

const LoginGuide = styled.div`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.B3};
`;
