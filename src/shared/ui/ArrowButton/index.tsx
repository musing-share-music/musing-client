import { css, Theme, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { ComponentProps } from 'react';

import IconArrow from 'shared/assets/image/icons/nav-bar/icon-arrow.svg?react';
import { commonStyles } from 'shared/styles/common';
import { CircleButton } from 'shared/ui/NavBar/styled';

interface ArrowButtonProps extends ComponentProps<'button'> {
  backgroundColor?: keyof Theme['colors'];
  hoverBackgroundColor?: keyof Theme['colors'];
  iconColor?: keyof Theme['colors'];
}

const rightArrowStyle = css`
  transform: rotate(180deg);
`;

const rightDownArrowStyle = css`
  transform: rotate(220deg);
`;

const ArrowCircleButton = styled(CircleButton)<{
  hoverBackgroundColor: keyof Theme['colors'];
  backgroundColor: keyof Theme['colors'];
}>`
  background-color: ${({ theme, backgroundColor }) => theme.colors[backgroundColor]};
  ${commonStyles.hoverTransition}
  &:hover {
    background: ${({ theme, hoverBackgroundColor }) => theme.colors[hoverBackgroundColor]};
  }
`;

export const RightArrowButton = ({ backgroundColor, hoverBackgroundColor, iconColor, ...props }: ArrowButtonProps) => {
  const theme = useTheme();
  const color = iconColor ? theme.colors[iconColor] : theme.colors.primary1;
  const buttonColor = backgroundColor || 600;
  const hoverColor = hoverBackgroundColor || 200;

  return (
    <ArrowCircleButton {...props} hoverBackgroundColor={hoverColor} backgroundColor={buttonColor}>
      <IconArrow css={rightArrowStyle} fill={color} />
    </ArrowCircleButton>
  );
};

export const LeftArrowButton = ({ backgroundColor, hoverBackgroundColor, iconColor, ...props }: ArrowButtonProps) => {
  const theme = useTheme();
  const color = iconColor ? theme.colors[iconColor] : theme.colors.primary1;
  const buttonColor = backgroundColor || 600;
  const hoverColor = hoverBackgroundColor || 400;

  return (
    <ArrowCircleButton {...props} hoverBackgroundColor={hoverColor} backgroundColor={buttonColor}>
      <IconArrow fill={color} />
    </ArrowCircleButton>
  );
};

export const RightDownArrowButton = ({
  backgroundColor,
  hoverBackgroundColor,
  iconColor,
  ...props
}: ArrowButtonProps) => {
  const theme = useTheme();
  const color = iconColor ? theme.colors[iconColor] : theme.colors.primary1;
  const buttonColor = backgroundColor || 600;
  const hoverColor = hoverBackgroundColor || 200;

  return (
    <ArrowCircleButton {...props} hoverBackgroundColor={hoverColor} backgroundColor={buttonColor}>
      <IconArrow css={rightDownArrowStyle} fill={color} />
    </ArrowCircleButton>
  );
};
