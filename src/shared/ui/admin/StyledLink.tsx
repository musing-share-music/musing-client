import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  padding: 0;
  border: none;
  ${({ theme }) => theme.fonts.wantedSans.C1};
  color: ${({ theme }) => theme.colors[200]};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors[200]};
  }
`;
