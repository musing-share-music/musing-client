import styled from '@emotion/styled';
import { ComponentProps, useState } from 'react';

import { ReportModal } from './ReportModal';

type ReportButtonProps = ComponentProps<'button'> & {
  replyId: number;
};

export const ReportButton = ({ replyId, ...props }: ReportButtonProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Report {...props} onClick={() => setOpen(true)}>
        신고
      </Report>
      <ReportModal open={open} onClose={() => setOpen(false)} replyId={replyId} />
    </>
  );
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
