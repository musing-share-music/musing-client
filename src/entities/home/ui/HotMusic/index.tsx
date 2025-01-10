import styled from '@emotion/styled';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { HotMusicList } from 'entities/home/model/types';

import { HotMusicItem } from './HotMusicItem';

// 핫 음악 전체영역
const HotContainer = styled.div`
  width: 1280px;
  height: 364px;
  position: relative;
`;

// 장르의 음악 리스트 영역
// const HotMusingBlock = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   display: flex;
//   gap: 16px;
//   width: 1024px;
//   height: 336px;
//   border-radius: 8px;
//   padding: 12px 16px 12px 24px;
//   background-color: ${({ theme }) => theme.colors[700]};
// `;

// 장르의 음악 리스트 타이틀 영역
const HotMusingTitle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 336px;
  height: 336px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors[600]};
  z-index: 1;
`;

const PageTitle = styled.div`
  position: absolute;
  left: 32px;
  bottom: 62px;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.H1};
`;

const SubTitle = styled.div`
  position: absolute;
  left: 32px;
  bottom: 28px;
  color: ${({ theme }) => theme.colors.primary2};
  ${({ theme }) => theme.fonts.wantedSans.T2};
`;

// 슬라이더 래퍼 스타일
const SliderWrapper = styled(Slider)`
  position: absolute;
  top: 0;
  right: 0;
  width: 1024px;
  height: 336px;
  border-radius: 8px;
  padding: 12px 16px 12px 24px;
  background-color: ${({ theme }) => theme.colors[700]};

  .slick-track {
    display: flex;
    gap: 16px;
  }

  .slick-slide {
    width: 296px !important;
  }

  // 페이지네이션 위치를 오른쪽으로 이동
  .slick-dots {
    right: 0; // 오른쪽 정렬
    width: auto;
    display: flex;
    justify-content: flex-end;
  }

  //페이지 스타일 수정
  .slick-dots li button:before {
    color: ${({ theme }) => theme.colors.primary1};
    font-size: 12px;
  }

  //이전 다음버튼 hide
  .slick-prev,
  .slick-next {
    display: none !important;
  }
`;

interface HotMusicListProps {
  HotMusicList: HotMusicList;
}

const HotMusic = ({ HotMusicList }: HotMusicListProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <HotContainer>
      <HotMusingTitle>
        <PageTitle>
          지금 뮤징에서
          <br />
          가장 핫🔥한 음악 모음
        </PageTitle>
        <SubTitle>POP • 얼터너티브</SubTitle>
      </HotMusingTitle>

      {/* <HotMusingBlock> */}
      <SliderWrapper {...settings}>
        {HotMusicList.map((item, index) => (
          <HotMusicItem item={item} key={index} />
        ))}
      </SliderWrapper>
      {/* </HotMusingBlock> */}
    </HotContainer>
  );
};

export default HotMusic;
