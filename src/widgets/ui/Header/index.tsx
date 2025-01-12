import styled from '@emotion/styled';
import { useRef, useState } from 'react';

import { HEADER_HEIGHT } from 'widgets/config/headerHeight';
import { ProfileModalRef } from 'widgets/config/profileModal';

import defaultProfileSrc from 'shared/assets/image/default_profile_image.png';
import googleLoginSrc from 'shared/assets/image/google_login.png';
import { Z_INDEX } from 'shared/config/constants';
import { useClickOutside } from 'shared/hooks/useClickOutside';

import { ProfileModal } from './ProfileModal';

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
  background: rgba(19, 19, 21, 0.8);
  z-index: ${Z_INDEX.GNB};
`;

const LogoBox = styled.div`
  grid-area: logo;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 9px;
`;

const UserBox = styled.div`
  position: relative;
  grid-area: user;
  justify-self: flex-end;
  align-self: center;
  width: 44px;
  height: 44px;
  padding: 0;
`;

const UserButton = styled.button<{ src: string }>`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors[400]} url(${({ src }) => src}) no-repeat center;
  background-size: cover;
  cursor: pointer;
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
  const [openProfileModal, setOpenProfileModal] = useState(false);
  const profileModalRef = useRef<ProfileModalRef>(null);

  useClickOutside({
    ref: profileModalRef,
    click: () => setOpenProfileModal(false),
  });

  const userProfileSrc = isLoggedIn ? defaultProfileSrc : googleLoginSrc;
  return (
    <HeaderBlock>
      <LogoBox>
        <LogoText>MUSING</LogoText>
        <LogoCaption>· 뮤징에서 음악을 디깅하는 중•••</LogoCaption>
      </LogoBox>
      <UserBox>
        <UserButton onClick={() => setOpenProfileModal(true)} src={userProfileSrc}></UserButton>
        <ProfileModal ref={profileModalRef} isOpen={openProfileModal} />
      </UserBox>
    </HeaderBlock>
  );
};
