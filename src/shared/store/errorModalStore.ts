import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { ErrorModalState } from 'shared/types/errorModalStore';

export const useErrorModalStore = create<ErrorModalState>()(
  persist(
    (set) => ({
      isOpen: false,
      message: '',
      isTokenReissueModal: false, // 토큰 재발급 관련 모달인지 여부
      openModal: (message: string, isTokenReissueModal = false) => set({ isOpen: true, message, isTokenReissueModal }),
      closeModal: () => {
        set((state) => {
          // 토큰 재발급 모달이었다면 확인 이벤트 발생
          if (state.isTokenReissueModal) {
            window.dispatchEvent(new CustomEvent('token-reissue-confirmed'));
          }
          return { isOpen: false, message: '', isTokenReissueModal: false };
        });
      },
    }),
    {
      name: 'error-modal-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
