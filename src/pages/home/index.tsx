import { useEffect, useState } from 'react';

import { MainLayout } from 'widgets/ui/';

import { MusicSelectionModal } from 'features/musicPreference/ui/MusicPreferenceModal';

import { Main } from 'entities/home/ui/index';

import { useUserInfoStore } from 'shared/store/userInfo';

// 컴포넌트 렌더링 테스트를 위한 /demo 페이지
const Home = () => {
  const { isLogin } = useUserInfoStore();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(!isLogin()); //jsnam 수정필요
  }, [isLogin()]);

  return (
    <MainLayout>
      <Main />
      <MusicSelectionModal open={open} onClose={() => setOpen(false)} />
    </MainLayout>
  );
};

export default Home;
