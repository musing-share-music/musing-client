import styled from '@emotion/styled';

import { OuterCloseModal } from 'shared/ui/Modal';

export const DeleteReviewModal = ({
  open,
  onClose,
  onConfirm,
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) => {
  return (
    <OuterCloseModal open={open} onClose={onClose}>
      <Content>
        <P>정말 리뷰를 삭제 하시겠어요?</P>
        <Button onClick={onConfirm}>삭제하기</Button>
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
  ${({ theme }) => theme.fonts.wantedSans.B2};
`;
const Button = styled.button`
  color: ${({ theme }) => theme.colors.secondary1};
  text-align: center;
  ${({ theme }) => theme.fonts.wantedSans.B3};
  border: none;
  cursor: pointer;
`;
