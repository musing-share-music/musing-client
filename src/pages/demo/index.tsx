// import styled from '@emotion/styled';

import { Main, MainLayout } from 'shared/ui/';

// 컴포넌트 렌더링 테스트를 위한 /demo 페이지
const Demo = () => {
  return (
    <MainLayout>
      <Main></Main>
      <br></br>
      {/* <PlaceHolder></PlaceHolder> */}
    </MainLayout>
  );
};
export default Demo;

// const PlaceHolder = styled.div`
//   width: 100%;
//   height: 50svh;
//   background: ${({ theme }) => theme.colors[600]};
//   border: 3px solid ${({ theme }) => theme.colors[200]};
// `;
