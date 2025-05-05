import { useEffect, useState } from 'react';

import { useGetMainQuery } from 'pages/home/lib/useGetMainQuery';

import { MusicSelectionModal } from 'features/musicPreference/ui/MusicPreferenceModal';

import { Main } from 'entities/home/ui/index';

import { useUserInfoStore } from 'shared/store/userInfo';
import { Spinner } from 'shared/ui/Spinner';

// 컴포넌트 렌더링 테스트를 위한 /demo 페이지
const Home = () => {
  const { passModal } = useUserInfoStore();
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetMainQuery();

  useEffect(() => {
    if (passModal == 'pass' || passModal == 'notLogIn') {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [passModal]);

  return isLoading ? (
    <Spinner isLoading={isLoading}></Spinner>
  ) : (
    <>
      {data ? <Main mainData={data} /> : null}
      <MusicSelectionModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Home;
