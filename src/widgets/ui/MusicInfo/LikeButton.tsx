import { css, Theme, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect } from 'react';

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
  isLikedClick: boolean;
}

export const LikeButton = ({ isLikedClick }: LikeButtonProps) => {
  const theme = useTheme();
  const isLiked = false;
  const color = isLiked ? theme.colors.primary1 : theme.colors[200];

  const likeClick = () => {
    if (isLikedClick) {
      console.log('좋아요 클릭됨');
    }
  };

  useEffect(() => {
    if (isLikedClick) {
      likeClick();
    }
  }, [isLikedClick]);

  return (
    <Button
      variant="outlined"
      css={isLiked ? ButtonStyles.liked(theme) : ButtonStyles.unliked(theme)}
      onClick={() => {
        likeClick();
      }}
    >
      <Container>
        <IconHeart fill={color} />
        좋아요
        <Count color={color}>(11)</Count>
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
