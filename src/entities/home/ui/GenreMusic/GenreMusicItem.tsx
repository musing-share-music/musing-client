import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { GenreMusicItem as GenreMusicItemData } from 'entities/home/model/types';
import { HoverRevealButton } from 'entities/home/ui/HoverRevealButton';

import btn_add from 'shared/assets/image/main/btn-add.png';
import { withHover, WithHoverProps } from 'shared/ui/withHover';

interface GenreMusicItemProps {
  item: GenreMusicItemData;
}

const GenreMusicItemBase = ({ item, isHover }: GenreMusicItemProps & WithHoverProps) => {
  return (
    <GenreMusingWrapper>
      <GenreMusingImageWrapper>
        <GenreMusingImage src={item.img} alt="이미지" className="main-image" />
        <GenreButton src={btn_add} alt="추가" className="btn_add" />
        <HoverRevealButton top={12} right={12} isHover={isHover} menuItem={[]} />
      </GenreMusingImageWrapper>

      <GenreTextBlock>
        <GenreTitle className="limit-text">{item.title}</GenreTitle>
        <GenreSubTitle className="limit-text">{item.name}</GenreSubTitle>
      </GenreTextBlock>
    </GenreMusingWrapper>
  );
};

export const GenreMusicItem = withHover(GenreMusicItemBase);

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
