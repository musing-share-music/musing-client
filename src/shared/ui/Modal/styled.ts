import styled from '@emotion/styled';

import { Z_INDEX } from 'shared/config/constants';

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.H1};
`;

export const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors[600]};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors[400]};
  color: ${({ theme }) => theme.colors.white};
  z-index: ${Z_INDEX.MODAL};
`;

export const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100svh;
  background: rgba(0, 0, 0, 0.6);
  z-index: ${Z_INDEX.MODAL};
`;
