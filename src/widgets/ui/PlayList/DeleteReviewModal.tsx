import { ConfirmModal } from 'shared/ui/Modal';

export const DeleteReviewModal = ({
  open,
  onClose,
  onConfirm,
  text = `정말 플레이리스트를 
              삭제하시겠어요?`,
  confirmText = '삭제하기',
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  text?: string;
  confirmText?: string;
}) => {
  return <ConfirmModal text={text} confirmText={confirmText} open={open} onClose={onClose} onConfirm={onConfirm} />;
};
