import { Modal } from './BaseModal';
import { BaseModalProps } from './type';

export const OuterCloseModal = ({ open, children, onClose }: BaseModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Modal.CloseButton
        style={{
          position: 'absolute',
          transform: 'translate(100%, 0)',
          right: '-16px', // 버튼과 모달 사이의 간격
        }}
        onClose={onClose}
      />
      {children}
    </Modal>
  );
};
