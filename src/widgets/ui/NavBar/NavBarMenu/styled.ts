import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { NAV_BAR_WIDTH } from 'widgets/config/navBarWidth';
import { toggleAnimation } from 'widgets/ui/NavBar/styled';
import { NavBarSizeProps } from 'widgets/ui/NavBar/type';

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
  padding: 0 30px;
  padding-top: 104px;
  padding-bottom: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.colors[500]};

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
  gap: 32px;
  ${toggleAnimation}

  ${({ size }) =>
    size === 'small' &&
    css`
      gap: 20px;
    `};
`;
