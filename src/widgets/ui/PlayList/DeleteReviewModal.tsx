import { ConfirmModal } from 'shared/ui/Modal';

export const DeleteReviewModal = ({
  open,
  onClose,
  onConfirm,
  text = `정말 플레이리스트를 
              삭제하시겠어요?`,
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  text?: string;
}) => {
  return <ConfirmModal text={text} confirmText="삭제하기" open={open} onClose={onClose} onConfirm={onConfirm} />;
};
