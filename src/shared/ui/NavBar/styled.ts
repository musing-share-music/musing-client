import { css } from '@emotion/react';
import styled from '@emotion/styled';

import IconArrow from 'shared/assets/image/icons/nav-bar/icon-arrow.svg';
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
  ${toggleAnimation}

  ${({ size }) =>
    size === 'small' &&
    css`
      width: 120px;
    `};
`;

export const NavContainer = styled.nav`
  padding: 0 30px;
  padding-bottom: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.colors[500]};
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

export const Aside = styled.aside``;

export const PlayList = styled.div<NavBarSizeProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 26px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors[500]};
  ${toggleAnimation}

  ${({ size }) =>
    size === 'small' &&
    css`
      justify-content: center;
    `};
`;

export const TrackListContainer = styled.div<NavBarSizeProps>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  ${toggleAnimation}

  ${({ size }) =>
    size === 'small' &&
    css`
      align-items: center;
    `};
`;

export const Track = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`;

export const Footer = styled.div<NavBarSizeProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 38px 0 30px;

  ${({ size }) =>
    size === 'small' &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    `};
`;

const CircleButton = styled.button`
  width: 44px;
  height: 44px;
  background: ${({ theme }) => theme.colors[500]};
  border-radius: 100%;
  border: none;
  cursor: pointer;
`;

export const AddButton = styled(CircleButton)``;

export const FoldButton = styled(CircleButton)`
  background-image: url(${IconArrow});
  background-repeat: no-repeat;
  background-position: center;
  border: none;
`;
