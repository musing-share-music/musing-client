import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { ErrorModalState } from 'shared/types/errorModalStore';

import { useUserInfoStore } from './userInfo';

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
            // 강제 로그아웃 처리
            useUserInfoStore.getState().logout(); // userInfo 초기화 및 localStorage 삭제
            window.dispatchEvent(new CustomEvent('token-reissue-confirmed')); // 페이지 이동
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
