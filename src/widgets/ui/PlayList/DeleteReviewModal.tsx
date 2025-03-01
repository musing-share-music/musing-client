import { ConfirmModal } from 'shared/ui/Modal';

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
    <ConfirmModal
      text={`정말 플레이리스트를 
              삭제하시겠어요?`}
      confirmText="삭제하기"
      open={open}
      onClose={onClose}
      onConfirm={onConfirm}
    />
  );
};
