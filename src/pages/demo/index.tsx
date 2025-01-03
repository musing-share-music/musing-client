import { useState } from 'react';

import { MainLayout } from 'widgets/ui/';

import { Main, MusicSelectionModal } from 'shared/ui/';

// 컴포넌트 렌더링 테스트를 위한 /demo 페이지
const Demo = () => {
  const [open, setOpen] = useState(true);
  return (
    <MainLayout>
      <button
        style={{
          background: '#fff',
        }}
        onClick={() => setOpen(true)}
      >
        선호 음악 모달 열기
      </button>
      <Main></Main>
      <MusicSelectionModal open={open} onClose={() => setOpen(false)} />
    </MainLayout>
  );
};
export default Demo;
