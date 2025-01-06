import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { NavBarSizeProps } from 'widgets/ui/NavBar/AdminNavBar/type';

import { commonStyles } from 'shared/styles/common';

export const NavBarItem = styled.li``;

interface NavLinkProps extends NavBarSizeProps {
  isActive: boolean;
}

export const NavLink = styled.a<NavLinkProps>`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 20px;
  border-radius: 16px;
  text-decoration: none;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.white : theme.colors[200]}; // 링크가 활성화되었을 때 색상 변경
  border-bottom: 1px solid ${({ theme }) => theme.colors[500]};
  font-size: 18px;
  ${({ theme }) => theme.fonts.wantedSans.B6};
  ${commonStyles.hoverTransition}

  &:hover {
    ${({ size, theme }) =>
      size === 'large' &&
      css`
        color: ${theme.colors[100]};
      `};
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
