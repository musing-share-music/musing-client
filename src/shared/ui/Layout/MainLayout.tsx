import styled from '@emotion/styled';

import { Header, NavBar } from 'shared/ui';
import { HEADER_HEIGHT } from 'shared/ui/Header/constants';
import { NAV_BAR_WIDTH } from 'shared/ui/NavBar/constants';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PageLayout>
      <LeftContainer>
        <NavBar />
      </LeftContainer>
      <RightContainer>
        <Header isLoggedIn />
        <ScrollableContainer>{children}</ScrollableContainer>
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

const ScrollableContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-top: -${HEADER_HEIGHT}px; // Header 높이를 고려한 여백
  padding: ${HEADER_HEIGHT}px 60px 0; // Header 높이를 고려한 여백
  min-width: 1280px;
  width: 1280px;
  scroll-behavior: smooth; // 스크롤 시 부드러운 애니메이션
`;
