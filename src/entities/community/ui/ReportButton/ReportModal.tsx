import styled from '@emotion/styled';
import { useState } from 'react';

import { Button, Modal, SelectBox } from 'shared/ui/';
import { Option } from 'shared/ui/Input/SelectBox';
import { BaseModalProps } from 'shared/ui/Modal';

type ReportModalProps = Omit<BaseModalProps, 'children'>;

export const ReportModal = ({ open, onClose }: ReportModalProps) => {
  const [selectedItem, setSelectedItem] = useState<Option>();

  return (
    <Modal open={open} onClose={onClose}>
      <Container>
        <Header>
          <Modal.Title>게시글 신고</Modal.Title>
          <Modal.CloseButton onClose={onClose} />
        </Header>
        <SelectBox
          placeholder="신고 사유를 선택해 주세요."
          options={[
            { value: '1', label: '사행성 광고 게시글 혹은 댓글' },
            { value: '2', label: '욕설 및 부적절한 게시글 혹은 댓글' },
            {
              value: '3',
              label: '설명과 일치하지 않는 게시글 혹은 댓글',
            },
            { value: '4', label: '기타 사유' },
          ]}
          onChange={(option) => setSelectedItem(option)}
        />
        <ButtonBlock>
          <Button width={132} disabled={!selectedItem}>
            첨부
          </Button>
        </ButtonBlock>
      </Container>
    </Modal>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 580px;
  padding: 36px 44px 44px 44px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ButtonBlock = styled.div`
  display: flex;
  justify-content: flex-end;
`;
