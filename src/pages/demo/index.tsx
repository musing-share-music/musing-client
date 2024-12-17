import { Main, MainLayout, MusicSelectionModal } from 'shared/ui/';

// 컴포넌트 렌더링 테스트를 위한 /demo 페이지
const Demo = () => {
  return (
    <MainLayout>
      <Main></Main>
      <MusicSelectionModal />
    </MainLayout>
  );
};
export default Demo;
