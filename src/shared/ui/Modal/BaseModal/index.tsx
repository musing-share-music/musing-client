import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { BackDrop, ModalBox, Title } from 'shared/ui/Modal/styled';
import { BaseModalProps } from 'shared/ui/Modal/type';

import { CloseButton } from './CloseButton';

/**
 * base modal을 사용해 모달을 확장
 */
const BaseModal = ({ open, children, onClose }: BaseModalProps) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open || !modalRef.current) return;

    const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
      'a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])',
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    firstElement?.focus(); // 모달 열릴 때 첫 번째 요소로 포커스 이동

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Escape':
          onClose();
          break;
        case 'Tab':
          if (focusableElements.length === 0) {
            event.preventDefault();
            return;
          }
          if (event.shiftKey) {
            // Shift + Tab: 첫 번째 요소에서 마지막 요소로 이동
            if (document.activeElement === firstElement) {
              event.preventDefault();
              lastElement?.focus();
            }
          } else {
            // Tab: 마지막 요소에서 첫 번째 요소로 이동
            if (document.activeElement === lastElement) {
              event.preventDefault();
              firstElement?.focus();
            }
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return;

  return createPortal(
    <>
      <BackDrop onClick={onClose} />
      <ModalBox ref={modalRef} role="dialog" aria-modal="true" tabIndex={-1}>
        {children}
      </ModalBox>
    </>,
    document.body,
  );
};

export const Modal = Object.assign(BaseModal, {
  Title,
  CloseButton,
});
