import { css } from '@emotion/react';
import styled from '@emotion/styled';

import IconShowMoreSvg from 'shared/assets/image/icons/nav-bar/icon-show-more.svg';

import { NAV_BAR_WIDTH } from './constants';
import { NavBarSizeProps } from './type';

export const hoverTransition = css`
  transition: 0.3s ease;
`;

export const toggleAnimation = css`
  transition: all 0.3s ease-in-out;
`;

export const Title = styled.p`
  margin: 0px;
  color: ${({ theme }) => theme.colors[100]};
  ${({ theme }) => theme.fonts.wantedSans.B6};
`;

export const MoreButton = styled.button`
  width: 32px;
  height: 32px;
  background: url(${IconShowMoreSvg}) no-repeat center;
  background-size: cover;
  border: none;
`;

export const Cover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const CoverWrapper = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  overflow: hidden;
`;

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

export const Aside = styled.aside``;

export const CircleButton = styled.button`
  width: 44px;
  height: 44px;
  background: ${({ theme }) => theme.colors[500]};
  border-radius: 100%;
  border: none;
  cursor: pointer;
`;
