import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { GenreMusicsItem } from 'entities/home/model/types';
import { HoverRevealButton } from 'entities/home/ui/HoverRevealButton';

import btn_add from 'shared/assets/image/main/btn-add.png';
import { ROUTES } from 'shared/config/routes';
import { withHover, WithHoverProps } from 'shared/ui/withHover';

interface GenreMusicsItemProps {
  item: GenreMusicsItem;
  onAddPlaylistClick?: () => void;
}

const GenreMusicItemBase = ({ item, isHover, onAddPlaylistClick }: GenreMusicsItemProps & WithHoverProps) => {
  const navigate = useNavigate();
  return (
    <GenreMusingWrapper>
      <GenreMusingImageWrapper>
        <GenreMusingImage src={item.thumbNailLink} alt="이미지" className="main-image" />
        <GenreButton src={btn_add} className="btn_add" onClick={onAddPlaylistClick} />
        <HoverRevealButton
          top={12}
          right={12}
          isHover={isHover}
          menuItem={[
            {
              onClick: async () => {
                await navigate(ROUTES.DETAIL.replace(':id', item.id.toString()));
              },
              content: '곡정보',
            },
            {
              onClick: async () => {
                await navigate(ROUTES.DETAIL.replace(':id', item.id.toString()), {
                  state: { isLikedClick: true },
                });
              },
              content: '좋아요',
            },
            {
              onClick: onAddPlaylistClick ? onAddPlaylistClick : () => {},
              content: '플레이리스트 추가',
            },
          ]}
        />
      </GenreMusingImageWrapper>

      <GenreTextBlock>
        <GenreTitle>{item.musicName}</GenreTitle>
        <GenreSubTitle>{item.artists[0]?.name}</GenreSubTitle>
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

  &:hover .btn_add {
    opacity: 1;
  }
`;

// 이미지
const GenreMusingImage = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  object-fit: cover;
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
  bottom: 12px;
  left: 12px;
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
