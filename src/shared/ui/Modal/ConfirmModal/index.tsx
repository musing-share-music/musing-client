import styled from '@emotion/styled';

import { OuterCloseModal } from 'shared/ui/Modal';

export const ConfirmModal = ({
  open,
  text,
  confirmText,
  onClose,
  onConfirm,
}: {
  open: boolean;
  text: string;
  confirmText?: string;
  onClose: () => void;
  onConfirm: () => void;
}) => {
  return (
    <OuterCloseModal open={open} onClose={onClose}>
      <Content>
        <P>{text}</P>
        <Button onClick={onConfirm}>{confirmText || '확인'}</Button>
      </Content>
    </OuterCloseModal>
  );
};

const Content = styled.div`
  display: flex;
  width: 420px;
  padding: 64px 52px 64px 56px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const P = styled.p`
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  white-space: pre-line;
  ${({ theme }) => theme.fonts.wantedSans.B2};
`;
const Button = styled.button`
  color: ${({ theme }) => theme.colors.secondary1};
  text-align: center;
  ${({ theme }) => theme.fonts.wantedSans.B3};
  border: none;
  cursor: pointer;
`;
