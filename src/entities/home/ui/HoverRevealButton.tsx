import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ComponentProps } from 'react';

import { MoreButton as BaseMoreButton } from 'shared/ui';

interface MoreButtonProps extends ComponentProps<typeof BaseMoreButton>, MoreButtonPosition {
  isHover: boolean;
}

// 더보기 버튼의 위치
interface MoreButtonPosition {
  top?: number;
  right?: number;
}

const style = css`
  width: 44px;
  height: 44px;
  border-radius: 100%;
  background: rgba(0, 0, 0, 0.32);
`;

export const HoverRevealButton = ({ isHover, top, right, ...props }: MoreButtonProps) => {
  if (!isHover) return;

  return (
    <MoreButtonBox isHover={isHover} top={top} right={right}>
      <BaseMoreButton {...props} style={style} />
    </MoreButtonBox>
  );
};

// 더보기 버튼
const MoreButtonBox = styled.div<{ isHover: boolean } & MoreButtonPosition>`
  position: ${({ top, right }) => (top === undefined && right === undefined ? 'static' : 'absolute')};
  top: ${({ top }) => (top !== undefined ? `${top}px` : 'auto')};
  right: ${({ right }) => (right !== undefined ? `${right}px` : 'auto')};
  opacity: ${({ isHover }) => (isHover ? 1 : 0)};
  transition: opacity 0.3s ease;
  pointer-events: ${({ isHover }) => (isHover ? 'auto' : 'none')};
  cursor: pointer;
  z-index: 1;
`;
