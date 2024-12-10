import styled from '@emotion/styled';

import arrow2 from 'shared/assets/image/main/arrow 2.png';
import btn_add from 'shared/assets/image/main/btn-add.png';
import btn_more from 'shared/assets/image/main/btn-more.png';
import { LikeMusicList } from 'shared/ui/Main/types';

// 좋아요한 음악 전체영역
const LikeContainer = styled.div`
  width: 1280px;
  height: 252px;
`;

//좋아요한 음악 타이틀
const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const PageTitle = styled.div`
  color: ${({ theme }) => theme.colors.secondary1};
  ${({ theme }) => theme.fonts.wantedSans.T1};
`;

const SubTitle = styled.div`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.T2};
`;

// 장르의 음악 리스트 영역
const LikeMusingBlock = styled.div`
  display: flex;
  gap: 16px;
  width: 1280px;
  height: 208px;
`;

// 이미지 래퍼 스타일
const LikeMusingImageWrapper = styled.div`
  position: relative;
  width: 208px;
  height: 208px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover .btn_add,
  &:hover .btn_more {
    opacity: 1;
  }

  &.small {
    width: 92px;
    height: 92px;
  }
`;

// 이미지
const LikeMusingImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
`;

// 버튼
const LikeButton = styled.img`
  position: absolute;
  width: 44px;
  height: 44px;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.3s ease;
  cursor: pointer;

  &.btn_add {
    top: 12px;
    left: 12px;
  }

  &.btn_more {
    top: 12px;
    right: 12px;

    &.small {
      top: 24px;
      right: 24px;
    }
  }
`;

// 텍스트블록 스타일
const LikeTextBlock = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0px;
  backdrop-filter: blur(4px);
  padding: 20px;
`;

const LikeTitle = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B6};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.8;
  margin-bottom: 4px;
`;

const LikeSubTitle = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B1};
  color: ${({ theme }) => theme.colors.white};
`;

//더보기
const LikeMore = styled.div`
  width: 384px;
  height: 208px;
  background-color: ${({ theme }) => theme.colors[600]};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow-wrap: inherit;
  padding: 8px;
  gap: 8px;
`;

const LikeMoreList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 8px;
  align-items: center;
  width: 100%;
`;

const Arrow = styled.img`
  width: 44px;
  height: 44px;
  justify-self: center; /* Arrow를 가운데 정렬 */
  margin-top: 20px;
  cursor: pointer;
`;

interface LikeMusicListProps {
  LikeMusicList: LikeMusicList;
}

const LikeMusic = ({ LikeMusicList }: LikeMusicListProps) => {
  const limitedLikeMusicList = LikeMusicList.slice(0, 4);
  const limitedLikeMusicList2 = LikeMusicList.slice(4, 7);
  const limitedLikeMusicList3 = LikeMusicList.slice(7, 10);

  return (
    <LikeContainer>
      <TitleBlock>
        <PageTitle>좋아요</PageTitle>
        <SubTitle>한 음악</SubTitle>
      </TitleBlock>

      <LikeMusingBlock>
        {limitedLikeMusicList.map((item, index) => (
          <LikeMusingImageWrapper key={index}>
            <LikeMusingImage src={item.img} alt="이미지" className="main-image" />
            <LikeButton src={btn_add} alt="추가" className="btn_add" />
            <LikeButton src={btn_more} alt="더보기" className="btn_more" />

            <LikeTextBlock>
              <LikeTitle>{item.name}</LikeTitle>
              <LikeSubTitle>{item.title}</LikeSubTitle>
            </LikeTextBlock>
          </LikeMusingImageWrapper>
        ))}

        <LikeMore>
          <LikeMoreList>
            {limitedLikeMusicList2.map((item, index) => (
              <LikeMusingImageWrapper className="small" key={index}>
                <LikeMusingImage src={item.img} alt="이미지" className="main-image" />
                <LikeButton src={btn_more} alt="더보기" className="btn_more small" />
              </LikeMusingImageWrapper>
            ))}
          </LikeMoreList>

          <LikeMoreList>
            {limitedLikeMusicList3.map((item, index) => (
              <LikeMusingImageWrapper className="small" key={index}>
                <LikeMusingImage src={item.img} alt="이미지" className="main-image" />
                <LikeButton src={btn_more} alt="더보기" className="btn_more small" />
              </LikeMusingImageWrapper>
            ))}
            <Arrow src={arrow2}></Arrow>
          </LikeMoreList>
        </LikeMore>
      </LikeMusingBlock>
    </LikeContainer>
  );
};

export default LikeMusic;
