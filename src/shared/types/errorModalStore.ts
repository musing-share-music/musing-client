// 모달창
export interface ErrorModalState {
  isOpen: boolean;
  message: string;
  openModal: (message: string) => void;
  closeModal: () => void;
}
