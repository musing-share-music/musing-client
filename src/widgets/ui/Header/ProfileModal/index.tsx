import styled from '@emotion/styled';
import { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { ProfileModalRef } from 'widgets/config/profileModal';

import { ROUTES } from 'shared/config/routes';
import URL from 'shared/config/urls';
import useNotificationStore from 'shared/store/notificationStore';
import { useUserInfoStore } from 'shared/store/userInfo';
import { Button } from 'shared/ui/Button';

interface ProfileModalProps {
  isOpen: boolean;
}

export const ProfileModal = forwardRef<ProfileModalRef, ProfileModalProps>(({ isOpen }, ref) => {
  const navigate = useNavigate();

  const { userInfo, logout } = useUserInfoStore();
  const navigate = useNavigate();

  const alarmData = useNotificationStore((state) => state.notifications);

  if (!isOpen) return;

  const fetchLogout = () => {
    window.location.href = URL.SERVERURL + URL.API.LOGOUT;
    logout();
  };

  return (
    <Layout ref={ref}>
      <Box>
        <UserInfo>
          <UserName>{userInfo.name}님</UserName>
          <UserEmail>{userInfo.email}</UserEmail>
        </UserInfo>
        <ButtonBlock>
          <Button
            variant="outlined"
            onClick={async () => {
              await navigate(`${ROUTES.MEMBERINFO.MEMBERINFO}`);
            }}
          >
            회원 정보
          </Button>
          <Button variant="outlined" onClick={fetchLogout}>
            <WarnText>로그아웃</WarnText>
          </Button>
        </ButtonBlock>
      </Box>

      <SectionText>알림</SectionText>
      <Box>
        {alarmData.map(({ id, content, urlLink, isRead }) => (
          <AlarmItem
            key={id}
            onClick={async () => {
              await navigate(urlLink);
            }}
          >
            <Message isRead={isRead}>{content}</Message>
            {!isRead && <Time></Time>}
          </AlarmItem>
        ))}
      </Box>
    </Layout>
  );
});

const AlarmItem = styled.button`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors[400]};
  appearance: none;
  border: none;
  text-align: left;

  &:first-child {
    padding-top: 0;
  }
  &:last-child {
    padding-bottom: 0;
  }
`;
const Message = styled.p<{ isRead: boolean }>`
  color: ${({ theme, isRead }) => (isRead ? theme.colors[200] : theme.colors.white)};
  ${({ theme }) => theme.fonts.wantedSans.B6};
`;
const Time = styled.p`
  color: ${({ theme }) => theme.colors.primary2};
  ${({ theme }) => theme.fonts.wantedSans.B6};
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const UserName = styled.p`
  color: ${({ theme }) => theme.colors.white};
  text-overflow: ellipsis;
  ${({ theme }) => theme.fonts.wantedSans.B3};
`;
const UserEmail = styled.p`
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.B5};
`;
const WarnText = styled.span`
  color: ${({ theme }) => theme.colors.secondary1};
`;

const ButtonBlock = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
`;

const Layout = styled.div`
  position: absolute;
  right: 0;
  top: 64px; // 프로필 버튼과 20px 간격
  display: flex;
  gap: 16px;
  flex-direction: column;
  width: 360px;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors[400]};
  background: ${({ theme }) => theme.colors[500]};
  box-shadow: 0px 0px 16px 0px rgba(16, 16, 18, 1);
`;

const Box = styled.div`
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors[400]};
`;

const SectionText = styled.p`
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.B6};
  text-align: left;
`;
