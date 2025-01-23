import styled from '@emotion/styled';
import { useState } from 'react';

import { genreMusics, likeGenre } from 'entities/home/model/types';

import Arrowdown from 'shared/assets/image/icons/icon-arrowdown.svg?react';

import { GenreMusicItem } from './GenreMusicItem';

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

const GenreMore = styled.div`
  width: 176px;
  height: 256px;
  background-color: ${({ theme }) => theme.colors['600']};
  border-radius: 12px;
`;

const PreferTagWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
`;

const PreferTag = styled.label<{ active: boolean }>`
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  background: ${({ theme, active }) => (active ? theme.colors.primary1 : theme.colors[500])};
  ${({ theme }) => theme.fonts.wantedSans.B5};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary1};
  }
`;

interface genreMusicsProps {
  genreMusics: genreMusics;
  likeGenre: likeGenre;
}

const GenreMusic = ({ genreMusics, likeGenre }: genreMusicsProps) => {
  const [activeCtgId, setActiveCtgId] = useState<number>(likeGenre[0].id);
  const CategoryClick = (CategoryId: number) => {
    setActiveCtgId(CategoryId);
  };

  return (
    <GenreContainer>
      <PreferTagWrapper>
        {likeGenre.map((item, index) => (
          <PreferTag key={index} active={activeCtgId === item.id} onClick={() => CategoryClick(item.id)}>
            {item.genreName}
          </PreferTag>
        ))}
        <Arrowdown />
      </PreferTagWrapper>

      <TitleBlock>
        {/* <PageTitle>{genreMusics.artists.name}</PageTitle> */}
        <SubTitle>장르의 음악</SubTitle>
      </TitleBlock>

      <GenreMusingBlock>
        {genreMusics.slice(0, 4).map((item, index) => (
          <GenreMusicItem key={index} item={item} />
        ))}

        <GenreMore>
          <TitleBlock className="more">
            {/* <PageTitle>{recommendGenreName}</PageTitle> */}
            <SubTitle>장르 더 듣기</SubTitle>
          </TitleBlock>
        </GenreMore>
      </GenreMusingBlock>
    </GenreContainer>
  );
};

export default GenreMusic;
