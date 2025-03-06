import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { ErrorModalState } from 'shared/types/errorModalStore';

export const useErrorModalStore = create<ErrorModalState>()(
  persist(
    (set) => ({
      isOpen: false,
      message: '',
      openModal: (message) => set({ isOpen: true, message }),
      closeModal: () => set({ isOpen: false, message: '' }),
    }),
    {
      name: 'error-modal-storage', // localStorage에 저장될 key 값
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
