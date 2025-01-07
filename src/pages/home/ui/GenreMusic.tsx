import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { GenreMusicList } from 'pages/home/ui/types';

import btn_add from 'shared/assets/image/main/btn-add.png';
import btn_more from 'shared/assets/image/main/btn-more.png';

// 장르의 음악 전체영역
const GenreContainer = styled.div`
  width: 1280px;
  height: 374px;
`;

//장르의 음악 타이틀
const TitleBlock = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  margin-bottom: 16px;

  &.more {
    flex-direction: column;
    align-items: flex-start;
    padding: 164px 20px 20px 20px;
    cursor: pointer;
  }
`;

const PageTitle = styled.div`
  color: ${({ theme }) => theme.colors.primary2};
  ${({ theme }) => theme.fonts.wantedSans.T1};
`;

const SubTitle = styled.div`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.T2};
`;

// 장르의 음악 리스트 영역
const GenreMusingBlock = styled.div`
  display: flex;
  gap: 20px;
  width: 1280px;
  height: 330px;
`;

// 이미지 래퍼 스타일
const GenreMusingWrapper = styled.div`
  width: 256px;
  height: 330px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover .main-image {
    opacity: 0.68;
  }

  &:hover .btn_add,
  &:hover .btn_more {
    opacity: 1;
  }
`;

// 이미지 Wrapper
const GenreMusingImageWrapper = styled.div`
  position: relative;
  width: 256px;
  height: 256px;
  border-radius: 12px;
`;

// 이미지
const GenreMusingImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  margin-bottom: 16px;
  transition: opacity 0.3s ease;
`;

// 버튼
const GenreButton = styled.img`
  position: absolute;
  width: 44px;
  height: 44px;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.3s ease;
  cursor: pointer;

  &.btn_add {
    bottom: 12px;
    left: 12px;
  }

  &.btn_more {
    top: 12px;
    right: 12px;
  }
`;

// 텍스트 컨테이너 스타일
const GenreTextBlock = styled.div`
  text-align: center;
  width: 100%;
  margin-top: 16px;
`;

const limitText = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// 장르음악 타이틀
const GenreTitle = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B2};
  color: ${({ theme }) => theme.colors.white};
  ${limitText};
`;

// 장르음악 서브타이틀
const GenreSubTitle = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B5};
  ${limitText};
  color: ${({ theme }) => theme.colors['200']};
  margin-top: 3px;
`;

const GenreMore = styled.div`
  width: 176px;
  height: 256px;
  background-color: ${({ theme }) => theme.colors['600']};
  border-radius: 12px;
`;

interface GenreMusicListProps {
  GenreMusicList: GenreMusicList;
}

const GenreMusic = ({ GenreMusicList }: GenreMusicListProps) => {
  return (
    <GenreContainer>
      <TitleBlock>
        <PageTitle>슈게이징</PageTitle>
        <SubTitle>장르의 음악</SubTitle>
      </TitleBlock>

      <GenreMusingBlock>
        {GenreMusicList.map((item, index) => (
          <GenreMusingWrapper key={index}>
            <GenreMusingImageWrapper>
              <GenreMusingImage src={item.img} alt="이미지" className="main-image" />
              <GenreButton src={btn_add} alt="추가" className="btn_add" />
              <GenreButton src={btn_more} alt="더보기" className="btn_more" />
            </GenreMusingImageWrapper>

            <GenreTextBlock>
              <GenreTitle className="limit-text">{item.title}</GenreTitle>
              <GenreSubTitle className="limit-text">{item.name}</GenreSubTitle>
            </GenreTextBlock>
          </GenreMusingWrapper>
        ))}

        <GenreMore>
          <TitleBlock className="more">
            <PageTitle>슈게이징</PageTitle>
            <SubTitle>장르 더 듣기</SubTitle>
          </TitleBlock>
        </GenreMore>
      </GenreMusingBlock>
    </GenreContainer>
  );
};

export default GenreMusic;
