import { Modal } from './BaseModal';
import { OuterCloseModalProps } from './type';

export const OuterCloseModal = ({ open, children, onClose }: OuterCloseModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
        <Modal.CloseButton
          style={{
            position: 'absolute',
            transform: 'translate(100%, 0)',
            right: '64px', // 버튼과 모달 사이의 간격
            top: '16px', // 아래로 16px 추가
            zIndex: 10, // 겹침 방지
          }}
          onClose={onClose}
        />
        {children}
    </Modal>
  );
};
