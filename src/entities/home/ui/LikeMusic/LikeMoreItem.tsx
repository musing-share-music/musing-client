import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { LikeMusicDtosItem } from 'entities/home/model/types';
import { HoverRevealButton } from 'entities/home/ui/HoverRevealButton';

import { ROUTES } from 'shared/config/routes';
import { withHover, WithHoverProps } from 'shared/ui/withHover';

interface LikeMusicDtosItemProps {
  item: LikeMusicDtosItem;
}

const LikeMoreItemBase = ({ item, isHover }: LikeMusicDtosItemProps & WithHoverProps) => {
  const navigate = useNavigate();
  return (
    <LikeMusingImageWrapper>
      <LikeMusingImage src={item.thumbNailLink} alt="이미지" className="main-image" />
      <HoverRevealButton
        isHover={isHover!}
        menuItem={[
          {
            onClick: async () => {
              await navigate(ROUTES.DETAIL.replace(':id', item.id.toString()));
            },
            content: '곡정보',
          },
          { onClick: () => {}, content: '좋아요' },
          { onClick: () => {}, content: '플레이리스트 추가' },
        ]}
        top={24}
        right={24}
      />
    </LikeMusingImageWrapper>
  );
};

export const LikeMoreItem = withHover(LikeMoreItemBase);

// 이미지 래퍼 스타일
const LikeMusingImageWrapper = styled.div`
  position: relative;
  width: 92px;
  height: 92px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover .btn_add {
    opacity: 1;
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
  object-fit: cover;
`;
