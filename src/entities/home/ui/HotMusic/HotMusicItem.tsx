import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { RecommendGenresItem } from 'entities/home/model/types';
import { HoverRevealButton } from 'entities/home/ui/HoverRevealButton';

import btn_add from 'shared/assets/image/main/btn-add.png';
import { ROUTES } from 'shared/config/routes';
import { withHover, WithHoverProps } from 'shared/ui/withHover';

interface RecommendGenresItemProps {
  item: RecommendGenresItem;
  onAddPlaylistClick?: () => void;
}

const HotMusicItemBase = ({ item, isHover, onAddPlaylistClick }: RecommendGenresItemProps & WithHoverProps) => {
  const navigate = useNavigate();
  return (
    <HotMusingImageWrapper>
      <HotMusingImage src={item.thumbNailLink} alt="이미지" className="main-image" />
      <Border />
      <HoverItemBox>
        <ButtonBlock>
          <HotButton src={btn_add} alt="추가" className="btn_add" onClick={onAddPlaylistClick} />
          <HoverRevealButton
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
                  await navigate(ROUTES.DETAIL.replace(':id', item.id.toString()), { state: { isLikedClick: true } });
                },
                content: '좋아요',
              },
              {
                content: '플레이리스트 추가',
                onClick: onAddPlaylistClick ? onAddPlaylistClick : () => {},
              },
            ]}
          />
        </ButtonBlock>
        <HotTitle>{item.musicName}</HotTitle>
        <HotSubTitle>{item.artists[0]?.name}</HotSubTitle>
      </HoverItemBox>
    </HotMusingImageWrapper>
  );
};

export const HotMusicItem = withHover(HotMusicItemBase);

const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  gap: 22px;
  margin-bottom: 30px;
`;

const HoverItemBox = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: opacity 0.3s ease;
  text-align: center;
`;

// 이미지 래퍼 스타일
const HotMusingImageWrapper = styled.div`
  position: relative;
  width: 296px;
  height: 296px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  &:hover .main-image {
    opacity: 0.68;
  }

  &:hover .btn_add,
  &:hover .hot_text {
    opacity: 1;
  }

  &:hover ${HoverItemBox} {
    opacity: 1;
  }
`;

// 이미지
const HotMusingImage = styled.img`
  width: 296px;
  height: 296px;
  border-radius: 50%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  object-fit: cover;
`;

const Border = styled.div`
  border-radius: 50%;
  border: 2px solid #101012;
  position: absolute;
  width: 96px;
  height: 96px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HotButton = styled.img`
  width: 44px;
  height: 44px;
  opacity: 0;
  transition: opacity 0.3s ease;
  cursor: pointer;
`;

const HotTitle = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.H1};
  color: ${({ theme }) => theme.colors.white};
`;

const HotSubTitle = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.T2};
  color: ${({ theme }) => theme.colors[100]};
`;
