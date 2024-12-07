import { css } from '@emotion/react';
import styled from '@emotion/styled';

// 추천아티스트 전체영역
const RcmContainer = styled.div`
  width: 1280px;
  height: 248px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: '. logo user';
  grid-column-gap: 24px;
`;

// 장르의 음악 리스트 영역
const RcmBlock = styled.div`
  position: relative;
  width: 584px;
  height: 248px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors[600]};
`;

// 장르의 음악 리스트 타이틀 영역
const RcmTitleBlock = styled.div`
  position: absolute;
  width: 317px;
  height: 196px;
  top: 32px;
  left: 40px;
`;

//타이틀
const RcmTitle = styled.span`
  ${({ theme }) => theme.fonts.wantedSans.H1};
  color: ${({ theme }) => theme.colors.white};
`;

const RcmTitle2 = styled.span`
  ${({ theme }) => theme.fonts.wantedSans.H1};
  color: ${({ theme }) => theme.colors[100]};
`;

// 이미지 래퍼 스타일
const GenreMusingWrapper = styled.div`
  width: 208px;
  height: 248px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors[600]};
  border-radius: 12px;
`;

// 이미지
const GenreMusingImage = styled.img`
  position: relative;
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
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
  ${({ theme }) => theme.fonts.wantedSans.T1};
  color: ${({ theme }) => theme.colors.white};
  text-align: left;
  ${limitText};
  margin-left: 6px;
  margin-bottom: 10px;
`;

const Card = ({ image, title }) => (
  <RcmContainer>
    <RcmBlock>
      <RcmTitleBlock>
        <RcmTitle>인디</RcmTitle>
        <RcmTitle2>를 좋아한 태리님에게 추천하는 아티스트</RcmTitle2>
      </RcmTitleBlock>
    </RcmBlock>
    <GenreMusingWrapper>
      <GenreMusingImage src={image} alt="추천 이미지" />
      <GenreTextBlock>
        <GenreTitle>{title}</GenreTitle>
      </GenreTextBlock>
    </GenreMusingWrapper>

    <GenreMusingWrapper>
      <GenreMusingImage src={image} alt="추천 이미지" />
      <GenreTextBlock>
        <GenreTitle>Midnight jogging c</GenreTitle>
      </GenreTextBlock>
    </GenreMusingWrapper>

    <GenreMusingWrapper>
      <GenreMusingImage src={image} alt="추천 이미지" />
      <GenreTextBlock>
        <GenreTitle>모스크바서핑클럽</GenreTitle>
      </GenreTextBlock>
    </GenreMusingWrapper>
  </RcmContainer>
);

export default Card;
