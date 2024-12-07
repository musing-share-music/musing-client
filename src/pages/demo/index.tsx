import styled from '@emotion/styled';

import image1 from 'shared/assets/image/main/image1.png';
import image2 from 'shared/assets/image/main/roundimg.png';
import { MainLayout } from 'shared/ui/';
import CommunityMusic from 'shared/ui/main/CommunityMusic';
import GenreMusic from 'shared/ui/main/GenreMusic';
import HotMusic from 'shared/ui/main/HotMusic';
import LikeMusic from 'shared/ui/main/LikeMusic';
import RecommendedMusic from 'shared/ui/main/RecommendedMusic';

// 컴포넌트 렌더링 테스트를 위한 /demo 페이지
const Demo = () => {
  return (
    <MainLayout>
      <GenreMusic image={image1} title="Honey" subtitle="TRPP" />
      <br />
      <LikeMusic image={image1} title="인디고" subtitle="여름아! 부탁해" />
      <br />
      <HotMusic image={image2} title="그린내" subtitle="실리카겔" />
      <br />
      <CommunityMusic
        image={image1}
        title="Highway Tune · Greta Van Fleet"
        subtitle="max-witdh 396이고 초과시 ...으로 나오도록 설정"
      ></CommunityMusic>
      <br />
      <RecommendedMusic image={image1} title="hathaw9y" />
      <br />
    </MainLayout>
  );
};
export default Demo;

const PlaceHolder = styled.div`
  width: 100%;
  height: 50svh;
  background: ${({ theme }) => theme.colors[600]};
  border: 3px solid ${({ theme }) => theme.colors[200]};
`;
