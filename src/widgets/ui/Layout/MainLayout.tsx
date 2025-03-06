import styled from '@emotion/styled';

import { HEADER_HEIGHT } from 'widgets/config/headerHeight';
import { NAV_BAR_WIDTH } from 'widgets/config/navBarWidth';
import { Header } from 'widgets/ui/Header';
import { NavBar } from 'widgets/ui/NavBar';

import { useErrorModalStore } from 'shared/store/errorModalStore';
import { useUserInfoStore } from 'shared/store/userInfo';
import { ErrorModal } from 'shared/ui/Modal';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, message, closeModal } = useErrorModalStore();
  const { isLogin } = useUserInfoStore();

  return (
    <PageLayout>
      <Header isLoggedIn={isLogin()} />
      <LeftContainer>
        <NavBar />
      </LeftContainer>
      <RightContainer>
        <ScrollableMainContainer>
          <ErrorModal open={isOpen} onClose={closeModal}>
            {message}
          </ErrorModal>
          <ContentsContainer>{children}</ContentsContainer>
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
