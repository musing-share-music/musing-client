import { css, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { ComponentProps } from 'react';

import IconArrow from 'shared/assets/image/icons/nav-bar/icon-arrow.svg?react';
import { commonStyles } from 'shared/styles/common';
import { CircleButton } from 'shared/ui/NavBar/styled';

interface ArrowButtonProps extends ComponentProps<'button'> {
  disabled?: boolean;
}

const rightArrowStyle = css`
  transform: rotate(180deg);
`;

const ArrowCircleButton = styled(CircleButton)`
  ${commonStyles.hoverTransition}
  &:hover {
    background: ${({ theme }) => theme.colors[300]};
  }
`;

export const RightArrowButton = ({ disabled, ...props }: ArrowButtonProps) => {
  const theme = useTheme();
  const color = disabled ? theme.colors[300] : theme.colors.primary1;
  return (
    <ArrowCircleButton {...props}>
      <IconArrow css={rightArrowStyle} fill={color} />
    </ArrowCircleButton>
  );
};

export const LeftArrowButton = ({ disabled, ...props }: ArrowButtonProps) => {
  const theme = useTheme();
  const color = disabled ? theme.colors[300] : theme.colors.primary1;
  return (
    <CircleButton {...props}>
      <IconArrow fill={color} />
    </CircleButton>
  );
};
