import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { LikeMusicDtosItem } from 'entities/home/model/types';
import { HoverRevealButton } from 'entities/home/ui/HoverRevealButton';

import { ROUTES } from 'shared/config/routes';
import { withHover, WithHoverProps } from 'shared/ui/withHover';

interface LikeMusicDtosItemProps {
  item: LikeMusicDtosItem;
}

const LikeMusicItemBase = ({ item, isHover }: LikeMusicDtosItemProps & WithHoverProps) => {
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

      <LikeTextBlock>
        <LikeTitle>{item.artists[0]?.name}</LikeTitle>
        <LikeSubTitle>{item.musicName}</LikeSubTitle>
      </LikeTextBlock>
    </LikeMusingImageWrapper>
  );
};

export const LikeMusicItem = withHover(LikeMusicItemBase);

// 이미지 래퍼 스타일
const LikeMusingImageWrapper = styled.div`
  position: relative;
  width: 208px;
  height: 208px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover .btn_add {
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
  object-fit: cover;
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
