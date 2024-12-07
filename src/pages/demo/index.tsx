import styled from '@emotion/styled';

import { Header } from 'shared/ui';
import CommunityMusic from 'shared/ui/card/CommunityMusic';
import GenreMusic from 'shared/ui/card/GenreMusic';
import HotMusic from 'shared/ui/card/HotMusic';
import image1 from 'shared/ui/card/img/image1.png';
import image2 from 'shared/ui/card/img/roundimg.png';
import LikeMusic from 'shared/ui/card/LikeMusic';
import RecommendedMusic from 'shared/ui/card/RecommendedMusic';

// 전체 컨테이너 스타일
const ContentArea = styled.div`
  width: 100%;
  height: 3000px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;

// 카드 컨테이너 스타일
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`;

// 컴포넌트 렌더링 테스트를 위한 /demo 페이지
const Demo = () => {
  return (
    <>
      <ContentArea>
        <Header isLoggedIn />
        <CardContainer>
          <GenreMusic image={image1} title="Honey" subtitle="TRPP" />

          <LikeMusic image={image1} title="인디고" subtitle="여름아! 부탁해" />

          <HotMusic image={image2} title="그린내" subtitle="실리카겔" />

          <CommunityMusic
            image={image1}
            title="Highway Tune · Greta Van Fleet"
            subtitle="max-witdh 396이고 초과시 ...으로 나오도록 설정"
          ></CommunityMusic>

          <RecommendedMusic image={image1} title="hathaw9y" />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </CardContainer>
      </ContentArea>
    </>
  );
};
export default Demo;
