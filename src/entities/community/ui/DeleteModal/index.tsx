import { ConfirmModal } from 'shared/ui/Modal';

export const DeleteModal = ({
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
      text="정말 리뷰를 삭제 하시겠어요?"
      confirmText="삭제하기"
      open={open}
      onClose={onClose}
      onConfirm={onConfirm}
    />
  );
};
