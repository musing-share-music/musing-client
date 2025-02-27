import styled from '@emotion/styled';

import { LikeMusicDtosItem } from 'entities/home/model/types';
import { HoverRevealButton } from 'entities/home/ui/HoverRevealButton';

import { withHover, WithHoverProps } from 'shared/ui/withHover';

interface LikeMusicDtosItemProps {
  item: LikeMusicDtosItem;
}

const LikeMoreItemBase = ({ item, isHover }: LikeMusicDtosItemProps & WithHoverProps) => {
  return (
    <LikeMusingImageWrapper>
      <LikeMusingImage src={item.thumbNailLink} alt="이미지" className="main-image" />
      <HoverRevealButton
        isHover={isHover!}
        menuItem={[
          { onClick: () => {}, content: '메뉴1' },
          { onClick: () => {}, content: '메뉴2' },
          { onClick: () => {}, content: '메뉴3' },
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
