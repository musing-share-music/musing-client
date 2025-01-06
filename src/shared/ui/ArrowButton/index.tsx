import { css, Interpolation, Theme, useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { ComponentProps } from 'react';

import { CircleButton } from 'widgets/ui/NavBar/styled';

import IconArrow from 'shared/assets/image/icons/nav-bar/icon-arrow.svg?react';
import { commonStyles } from 'shared/styles/common';

interface BaseArrowButtonProps extends ComponentProps<'button'> {
  backgroundColor?: keyof Theme['colors'];
  hoverBackgroundColor?: keyof Theme['colors'];
  iconColor?: keyof Theme['colors'];
  disabled?: boolean;
  href?: string; // href를 전달하는 경우, a 태그로 동작
  css?: Interpolation<Theme>;
}

type ArrowButtonProps = Omit<BaseArrowButtonProps, 'css'>;

type ArrowCircleButtonProps<T extends 'button' | 'a'> = {
  as?: T;
  hoverBackgroundColor: keyof Theme['colors'];
  backgroundColor: keyof Theme['colors'];
} & (T extends 'a' ? ComponentProps<'a'> : ComponentProps<'button'>);

const ArrowCircleButton = styled(CircleButton)<ArrowCircleButtonProps<'button' | 'a'>>`
  background-color: ${({ theme, backgroundColor }) => theme.colors[backgroundColor]};
  ${commonStyles.hoverTransition}
  &:hover {
    background: ${({ theme, hoverBackgroundColor }) => theme.colors[hoverBackgroundColor]};
  }
`;

const BaseArrowButton = ({
  disabled,
  backgroundColor,
  hoverBackgroundColor,
  iconColor,
  href,
  css,
  ...props
}: BaseArrowButtonProps) => {
  const theme = useTheme();
  const color = iconColor ? theme.colors[iconColor] : theme.colors.primary1;
  const buttonColor = backgroundColor || 500;
  const hoverColor = hoverBackgroundColor || 300;

  return (
    <ArrowCircleButton
      as={href ? 'a' : 'button'}
      {...props}
      href={href}
      disabled={disabled}
      hoverBackgroundColor={hoverColor}
      backgroundColor={buttonColor}
    >
      <IconArrow css={css} fill={color} />
    </ArrowCircleButton>
  );
};

export const RightArrowButton = ({ ...props }: ArrowButtonProps) => {
  const rightArrowStyle = css`
    transform: rotate(180deg);
  `;
  return <BaseArrowButton css={rightArrowStyle} {...props} />;
};

export const LeftArrowButton = ({ ...props }: ArrowButtonProps) => {
  return <BaseArrowButton {...props} />;
};

export const RightDownArrowButton = ({ ...props }: ArrowButtonProps) => {
  const rightDownArrowStyle = css`
    transform: rotate(220deg);
  `;
  return <BaseArrowButton css={rightDownArrowStyle} {...props} />;
};
