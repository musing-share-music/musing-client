import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { toggleAnimation } from 'widgets/ui/NavBar/styled';
import { NavBarSizeProps } from 'widgets/ui/NavBar/type';

import { TrackListProps } from '.';

export const TrackListContainer = styled.div<TrackListProps>`
  display: flex;
  height: 256px;
  overflow: hidden;
  max-height: ${({ open }) => (open ? '256px' : '0')}; // 아이템 최대 3개 높이
  transition: max-height 0.3s ease-in-out;
  ${toggleAnimation}
  ${({ size, open }) =>
    size === 'small' &&
    css`
      max-height: ${open ? '238px' : '0'}; // 아이템 최대 3개 높이
    `};
`;

const ScrollableContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  scroll-behavior: smooth; // 스크롤 시 부드러운 애니메이션
`;

export const TrackListScrollableContainer = styled(ScrollableContainer)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
`;

export const Track = styled.div<NavBarSizeProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 16px;

  &:hover {
    background: ${({ theme }) => theme.colors[500]};
  }

  ${({ size }) =>
    size === 'small' &&
    css`
      justify-content: center;
    `};
`;
