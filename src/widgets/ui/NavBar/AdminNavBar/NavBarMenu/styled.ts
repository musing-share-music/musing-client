import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { NAV_BAR_WIDTH } from 'widgets/config/navBarWidth';
import { toggleAnimation } from 'widgets/ui/NavBar/AdminNavBar/styled';
import { NavBarSizeProps } from 'widgets/ui/NavBar/AdminNavBar/type';

export const NavBarContainer = styled.div<NavBarSizeProps>`
  position: relative;
  top: 0px;
  width: ${NAV_BAR_WIDTH}px;
  height: 100%;
  background: ${({ theme }) => theme.colors[700]};
  overflow-y: scroll;
  ${toggleAnimation}

  ${({ size }) =>
    size === 'small' &&
    css`
      width: 120px;
    `};
`;

export const NavContainer = styled.nav<NavBarSizeProps>`
  padding: 32px 35.5px 0;

  ${({ size }) =>
    size === 'small' &&
    css`
      padding-top: 112px;
      padding-bottom: 40px;
    `};
`;

export const NavBarItemList = styled.ul<NavBarSizeProps>`
  display: flex;
  flex-direction: column;
  ${toggleAnimation}
  ${({ size }) =>
    size === 'small' &&
    css`
      gap: 20px;
    `};
`;
