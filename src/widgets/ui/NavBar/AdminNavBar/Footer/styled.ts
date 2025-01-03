import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { CircleButton } from 'widgets/ui/NavBar/styled';
import { NavBarSizeProps } from 'widgets/ui/NavBar/type';

import IconArrow from 'shared/assets/image/icons/nav-bar/icon-arrow.svg';

export const Footer = styled.div<NavBarSizeProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 25px 38px 245px 30px;

  ${({ size }) =>
    size === 'small' &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      gap: 164px;
      padding-bottom: 246px;
    `};
`;

export const AddButton = styled(CircleButton)``;

export const FoldButton = styled(CircleButton)`
  background-image: url(${IconArrow});
  background-repeat: no-repeat;
  background-position: center;
  border: none;
`;
