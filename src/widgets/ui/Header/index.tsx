import styled from '@emotion/styled';

import { HEADER_HEIGHT } from 'widgets/config/headerHeight';

import IconGoogle from './icon-google.png';
import IconProfile from './icon-profile.png';

interface HeaderProps {
  isLoggedIn: boolean;
}

const HeaderBlock = styled.header`
  position: absolute;
  left: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: '. logo user';
  width: 100%;
  min-width: 1280px;
  height: ${HEADER_HEIGHT}px;
  padding: 0 32px;
  background: ${({ theme }) => theme.colors[800]};
  opacity: 80%;
`;

const LogoBox = styled.div`
  grid-area: logo;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
`;

const UserButton = styled.button`
  grid-area: user;
  justify-self: flex-end;
  align-self: center;
  cursor: pointer;
  width: 44px;
  height: 44px;
  padding: 0;
  border-radius: 12px;
  overflow: hidden;
`;

const UserBox = styled.div<{ src: string }>`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors[400]} url(${({ src }) => src}) no-repeat center;
`;

const LogoText = styled.p`
  color: ${({ theme }) => theme.colors.primary2};
  ${({ theme }) => theme.fonts.wantedSans};
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
`;
const LogoCaption = styled.p`
  white-space: nowrap;
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.B6};
`;

export const Header = ({ isLoggedIn }: HeaderProps) => {
  const userProfileSrc = isLoggedIn ? IconProfile : IconGoogle;

  const fetchLogin = () => {
    const GOOGLE_AUTH_URL = 'http://localhost:8090/oauth2/authorization/google';
    const REDIRECT_URI = 'https://www.naver.com/';

    window.location.href = `${GOOGLE_AUTH_URL}?redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;
  };

  return (
    <HeaderBlock>
      <LogoBox>
        <LogoText>MUSING</LogoText>
        <LogoCaption>· 뮤징에서 음악을 디깅하는 중•••</LogoCaption>
      </LogoBox>
      <UserButton
        onClick={() => {
          fetchLogin();
        }}
      >
        <UserBox src={userProfileSrc}></UserBox>
      </UserButton>
    </HeaderBlock>
  );
};
