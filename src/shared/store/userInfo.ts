import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { UserInfo, UserState } from 'shared/types/userInfo';

export const useUserInfoStore = create<UserState>()(
  persist(
    (set, get) => ({
      // 로그인한 사용자의 정보
      userInfo: {
        userId: '',
        email: '',
        name: '',
        authority: '',
        likeMusicCount: 0,
        myPlaylistCount: 0,
      },
      passModal: 'notLogIn', // 기본값 설정

      // 로그인 여부 확인
      isLogin: () => {
        // localStorage에서 직접 확인
        const storedState = localStorage.getItem('user-storage');
        if (storedState) {
          const { state } = JSON.parse(storedState);
          return state.passModal !== 'notLogIn';
        }
        return get().passModal !== 'notLogIn';
      },

      // 관리자 여부 확인
      // TODO api 연동
      isAdmin: () => true,

      // 사용자 정보 설정
      setUser: (user: UserInfo) => set({ userInfo: user }),

      // 사용자 모달창 여부 설정
      setPassModal: (value: string) => set({ passModal: value }),

      // 로그아웃 처리
      logout: () => {
        set({
          userInfo: {
            userId: '',
            email: '',
            name: '',
            authority: '',
            likeMusicCount: 0,
            myPlaylistCount: 0,
          },
          passModal: 'notLogIn',
        });
        // 로그아웃 시 localStorage 클리어
        localStorage.removeItem('user-storage');
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
