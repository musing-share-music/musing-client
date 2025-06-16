import styled from '@emotion/styled';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import { RecommendGenre, RecommendGenres, RecommendGenresItem } from 'entities/home/model/types';

import { Nodata } from 'shared/ui';
import { AddPlayListModal } from 'shared/ui/Modal/PlayListModal/AddPlayList';
import { CreatePlayListModal } from 'shared/ui/Modal/PlayListModal/CreatePlayList';
import { PersistPlayListModal } from 'shared/ui/Modal/PlayListModal/PersistPlayList';

import { HotMusicItem } from './HotMusicItem';

// 핫 음악 전체영역
const HotContainer = styled.div`
  width: 1280px;
  height: 364px;
  position: relative;
`;

const HotContainerWrapper = styled.div`
  width: 1280px;
  height: 336px;
  position: relative;
  background-color: ${({ theme }) => theme.colors[600]};
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

interface RecommendGenreProps {
  recommendGenre: RecommendGenre;
  recommendGenres: RecommendGenres;
}

const HotMusic = ({ recommendGenre, recommendGenres }: RecommendGenreProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const [isCreateOpen, setCreateOpen] = useState(false);
  const [isPersistOpen, setPersistOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<RecommendGenresItem | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
  };

  return (
    <HotContainer>
      <AddPlayListModal
        open={modalOpen}
        onClose={closeModal}
        children={undefined}
        data={selectedData}
        onOpenCreateModal={() => setCreateOpen(true)}
      />
      <CreatePlayListModal
        open={isCreateOpen}
        onClose={() => setCreateOpen(false)}
        onOpenPersistModal={() => {
          setCreateOpen(false);
          setPersistOpen(true);
        }}
        children={undefined}
      />
      <PersistPlayListModal open={isPersistOpen} onClose={() => setPersistOpen(false)} children={undefined} />
      <HotContainerWrapper>
        {recommendGenres.length === 0 ? (
          <Nodata Comment={'아직 핫한 음악이 없어요.'}></Nodata>
        ) : (
          <>
            <HotMusingTitle>
              <PageTitle>
                지금 뮤징에서
                <br />
                가장 핫🔥한 음악 모음
              </PageTitle>
              <SubTitle>{recommendGenre.genreName}</SubTitle>
            </HotMusingTitle>

            <SliderWrapper {...settings}>
              {recommendGenres.map((item, index) => (
                <HotMusicItem
                  item={item}
                  key={index}
                  onAddPlaylistClick={() => {
                    setSelectedData(item);
                    openModal();
                  }}
                />
              ))}
            </SliderWrapper>
          </>
        )}
      </HotContainerWrapper>
    </HotContainer>
  );
};

export default HotMusic;
