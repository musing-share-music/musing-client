import styled from '@emotion/styled';
import { ComponentProps } from 'react';

type ReportButtonProps = ComponentProps<'button'>;

export const ReportButton = ({ ...props }: ReportButtonProps) => {
  return <Report {...props}>신고</Report>;
};

const Report = styled.button`
  padding: 0;
  border: none;
  ${({ theme }) => theme.fonts.wantedSans.C1};
  color: ${({ theme }) => theme.colors[200]};
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors[200]};
  }
`;
