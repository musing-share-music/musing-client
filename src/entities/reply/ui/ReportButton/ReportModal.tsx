import styled from '@emotion/styled';
import { useState } from 'react';

import { useReportReply } from 'entities/community/api/reportReply';

import { Button, Modal, SelectBox } from 'shared/ui/';
import { Option } from 'shared/ui/Input/SelectBox';
import { BaseModalProps } from 'shared/ui/Modal';

interface ReportModalProps extends Omit<BaseModalProps, 'children'> {
  replyId: number;
}

export const ReportModal = ({ open, onClose, replyId }: ReportModalProps) => {
  const [selectedItem, setSelectedItem] = useState<Option>();
  const { mutate: reportReply, isPending } = useReportReply();

  const handleReport = () => {
    if (!selectedItem || isPending) return;

    reportReply(
      {
        replyId,
        content: selectedItem.label,
      },
      {
        onSuccess: () => {
          alert('신고가 접수되었습니다.');
          setSelectedItem(undefined);
          onClose();
        },
        onError: () => {
          alert('신고 접수 중 오류가 발생했습니다. 다시 시도해주세요.');
        },
      },
    );
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Container>
        <Header>
          <Modal.Title>댓글 신고</Modal.Title>
          <Modal.CloseButton onClose={onClose} />
        </Header>
        <SelectBox
          placeholder="신고 사유를 선택해 주세요."
          options={[
            { value: '1', label: '사행성 광고 댓글' },
            { value: '2', label: '욕설 및 부적절한 댓글' },
            {
              value: '3',
              label: '설명과 일치하지 않는 댓글',
            },
            { value: '4', label: '기타 사유' },
          ]}
          onChange={(option) => setSelectedItem(option)}
        />
        <ButtonBlock>
          <Button 
            width={132} 
            disabled={!selectedItem || isPending} 
            onClick={handleReport}
          >
            {isPending ? '신고 중...' : '신고하기'}
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
