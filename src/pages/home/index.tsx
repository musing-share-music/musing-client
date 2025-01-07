// import { useState } from 'react';

import { MainLayout } from 'widgets/ui/';

// import { MusicSelectionModal } from 'features/musicPreference/ui/MusicPreferenceModal';

import { Main } from './ui';

// 컴포넌트 렌더링 테스트를 위한 /demo 페이지
const Home = () => {
  // const [open, setOpen] = useState(true);
  return (
    <MainLayout>
      <Main></Main>
      {/* <MusicSelectionModal open={open} onClose={() => setOpen(false)} /> */}
    </MainLayout>
  );
};
export default Home;
