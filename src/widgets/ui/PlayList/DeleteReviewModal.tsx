import { ConfirmModal } from 'shared/ui/Modal';

export const DeleteReviewModal = ({
  open,
  onClose,
  onConfirm,
  hasReview,
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  hasReview: boolean;
}) => {
  if (hasReview) {
    return (
      <ConfirmModal
        text="작성한 리뷰가 없습니다."
        confirmText="확인"
        open={open}
        onClose={onClose}
        onConfirm={onClose}
      />
    );
  }
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
