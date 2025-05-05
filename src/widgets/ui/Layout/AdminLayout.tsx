import styled from '@emotion/styled';
import { Navigate, Outlet } from 'react-router-dom';

import { HEADER_HEIGHT } from 'widgets/config/headerHeight';
import { NAV_BAR_WIDTH } from 'widgets/config/navBarWidth';
import { Header } from 'widgets/ui/Header';
import { AdminNavBar } from 'widgets/ui/NavBar';

import { useAdminInfoQuery } from 'entities/adminIInfo/api/adminInfo.query';

import { useUserInfoStore } from 'shared/store/userInfo';

export const AdminLayout = () => {
  const { isLogin } = useUserInfoStore();
  const { data, isLoading } = useAdminInfoQuery();

  if (!isLoading && !data?.isAdmin) {
    return <Navigate to="/" replace />; // 관리자가 아니면 메인 페이지로 리다이렉트
  }

  return (
    <PageLayout>
      <Header isLoggedIn={isLogin()} />
      <LeftContainer>
        <AdminNavBar />
      </LeftContainer>
      <RightContainer>
        <ScrollableMainContainer>
          <ContentsContainer>
            <Outlet />
          </ContentsContainer>
        </ScrollableMainContainer>
      </RightContainer>
    </PageLayout>
  );
};

const PageLayout = styled.div`
  display: flex;
  height: 100svh;
`;

const LeftContainer = styled.div`
  width: ${NAV_BAR_WIDTH}px;
  background: ${({ theme }) => theme.colors[900]};
  display: flex;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1; // 화면의 남은 공간을 채운다.
  background: ${({ theme }) => theme.colors[900]};
`;

export const ScrollableContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  scroll-behavior: smooth; // 스크롤 시 부드러운 애니메이션
`;
const ScrollableMainContainer = styled(ScrollableContainer)`
  padding-top: ${HEADER_HEIGHT}px; // Header 높이를 고려한 여백
`;

// 컨텐츠 width는 1280px로 고정
const ContentsContainer = styled.div`
  margin: 0 auto;
  min-width: 1280px;
  width: 1280px;
  scroll-behavior: smooth; // 스크롤 시 부드러운 애니메이션
`;
