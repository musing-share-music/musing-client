import { create } from 'zustand';

interface AdminInfoState {
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
}

export const useAdminInfoStore = create<AdminInfoState>((set) => ({
  isAdmin: false,
  setIsAdmin: (isAdmin) => set({ isAdmin }),
}));
