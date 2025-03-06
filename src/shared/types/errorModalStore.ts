// 모달창
export interface ErrorModalState {
  isOpen: boolean;
  message: string;
  isTokenReissueModal: boolean;
  openModal: (message: string, isTokenReissueModal?: boolean) => void;
  closeModal: () => void;
}
