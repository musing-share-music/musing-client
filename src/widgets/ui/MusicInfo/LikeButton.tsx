import { css, Theme, useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { useRecommendMutation } from 'entities/community/api/community.query';

import IconHeart from 'shared/assets/image/icons/icon-heart.svg?react';
import { Button } from 'shared/ui/Button';

const ButtonStyles = {
  liked: (theme: Theme) => css`
    color: ${theme.colors.primary1};
    border: 1px solid ${theme.colors.primary1};
    &:hover {
      background: transparent;
    }
  `,
  unliked: (theme: Theme) => css`
    &:hover {
      ${Count} {
        color: ${theme.colors.primary1};
      }
      svg path {
        fill: ${theme.colors.primary1};
      }
    }
  `,
};

interface LikeButtonProps {
  boardId: number;
  isLike: boolean;
  likeCount:number;
}

export const LikeButton = ({ boardId, isLike, likeCount }: LikeButtonProps) => {
  const theme = useTheme();
  const recommendMutation = useRecommendMutation(boardId);
  const color = isLike ? theme.colors.primary1 : theme.colors[200];

  const handleLikeClick = () => {
    // toggle이 됨
    recommendMutation.mutate();
  };

  return (
    <Button
      variant="outlined"
      css={isLike ? ButtonStyles.liked(theme) : ButtonStyles.unliked(theme)}
      onClick={handleLikeClick}
      disabled={recommendMutation.isPending}
    >
      <Container>
        <IconHeart fill={color} />
        좋아요
        <Count color={color}>({likeCount})</Count>
      </Container>
    </Button>
  );
};

const Container = styled.div<{ isLiked?: boolean }>`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Count = styled.span<{ color: string }>`
  color: ${({ color }) => color};
`;
