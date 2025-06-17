import styled from '@emotion/styled';

import ErrorIcon from 'shared/assets/image/icons/icon-error.svg?react';
import { Button } from 'shared/ui/Button';
import { Modal } from 'shared/ui/Modal/BaseModal';
import { OuterCloseModal } from 'shared/ui/Modal/OuterCloseModal';
import { OuterCloseModalProps } from 'shared/ui/Modal/type';

interface ErrorModalProps extends OuterCloseModalProps {
  title?: string;
}

export const ErrorModal = ({ children, ...props }: ErrorModalProps) => {
  return (
    <OuterCloseModal {...props}>
      <Content>
        <TitleWrap>
          <ErrorIcon></ErrorIcon>
          <Modal.Title>{props.title ? props.title : '문제가 발생했습니다.'}</Modal.Title>
        </TitleWrap>
        {children}
        <ButtonBlock>
          <ButtonWrap>
            <Button onClick={props.onClose}>확인</Button>
          </ButtonWrap>
        </ButtonBlock>
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

const TitleWrap = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const ButtonBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ButtonWrap = styled.div`
  width: 163px;
`;
