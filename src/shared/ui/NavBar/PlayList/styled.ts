import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { toggleAnimation } from 'shared/ui/NavBar/styled';
import { NavBarSizeProps } from 'shared/ui/NavBar/type';

export const PlayListContainer = styled.div<NavBarSizeProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 26px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors[500]};
  cursor: pointer;

  ${toggleAnimation}

  ${({ size }) =>
    size === 'small' &&
    css`
      padding-top: 28px;
      justify-content: center;
    `};
`;

export const PlayListFoldButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 11px 0;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colors[500]};
  cursor: pointer;
`;

export const ShowAllPlayListButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 14px 0;
  border: none;
  color: ${({ theme }) => theme.colors[400]};
  cursor: pointer;
`;
