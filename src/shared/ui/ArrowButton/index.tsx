import { css } from '@emotion/react';
import { ComponentProps } from 'react';

import IconArrow from 'shared/assets/image/icons/nav-bar/icon-arrow.svg?react';
import { CircleButton } from 'shared/ui/NavBar/styled';

type ArrowButtonProps = ComponentProps<'button'>;

const rightArrowStyle = css`
  transform: rotate(180deg);
`;

// TODO 호버, 비활성화
export const RightArrowButton = ({ ...props }: ArrowButtonProps) => {
  return (
    <CircleButton {...props}>
      <IconArrow css={rightArrowStyle} />
    </CircleButton>
  );
};

export const LeftArrowButton = ({ ...props }: ArrowButtonProps) => {
  return (
    <CircleButton {...props}>
      <IconArrow />
    </CircleButton>
  );
};
