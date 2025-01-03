import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { NavBarSizeProps } from 'widgets/ui/NavBar/type';

import { commonStyles } from 'shared/styles/common';

export const NavBarItem = styled.li``;

interface NavLinkProps extends NavBarSizeProps {
  iconActive: string;
}

export const NavLink = styled.a<NavLinkProps>`
  display: flex;
  align-items: center;
  padding: 8px;
  gap: 20px;
  border-radius: 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  padding: 16px 24px;
  font-size: 18px;
  ${({ theme }) => theme.fonts.wantedSans.B6};
  ${commonStyles.hoverTransition}

  &:hover {
    ${({ size, theme }) =>
      size === 'large' &&
      css`
        background: ${theme.colors[500]};
      `};
  }

  &:hover div {
    background-image: url(${(props) => props.iconActive});
  }

  ${({ size }) =>
    size === 'small' &&
    css`
      flex-direction: column;
      padding: 8px 12px;
      font-size: 14px;
      gap: 8px !important;
    `};
`;

export const IconBox = styled.div<{ src: string }>`
  width: 44px;
  height: 44px;
  background: url(${({ src }) => src}) no-repeat;
  ${commonStyles.hoverTransition}
`;
