import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ScrollableContainer } from 'shared/ui/Layout/MainLayout';
import { TrackListProps } from '.';
import { toggleAnimation } from '../styled';
import { NavBarSizeProps } from '../type';

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
