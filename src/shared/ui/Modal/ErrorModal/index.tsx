import styled from '@emotion/styled';

import { Modal } from 'shared/ui/Modal/BaseModal';
import { OuterCloseModal } from 'shared/ui/Modal/OuterCloseModal';
import { OuterCloseModalProps } from 'shared/ui/Modal/type';

export const ErrorModal = ({ children, ...props }: OuterCloseModalProps) => {
  return (
    <OuterCloseModal {...props}>
      <Content>
        <Modal.Title>문제가 발생했습니다.</Modal.Title>
        {children}
      </Content>
    </OuterCloseModal>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 580px;
  padding: 36px 44px 44px 44px;
`;
