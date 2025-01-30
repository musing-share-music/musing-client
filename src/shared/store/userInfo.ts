import { create } from 'zustand';

import type { UserInfo, UserState } from 'shared/types/userInfo';

export const useUserInfoStore = create<UserState>((set, get) => ({
  // 로그인한 사용자의 정보
  userInfo: {
    email: '',
    name: '',
    authority: '',
    likeMusicCount: 0,
    myPlaylistCount: 0,
  },
  passModal: 'notLogIn', // 기본값 설정

  // 로그인 여부 확인
  isLogin: () => get().passModal !== 'notLogIn',

  // 관리자 여부 확인
  isAdmin: () => get().userInfo.authority === 'ADMIN',

  // 사용자 정보 설정
  setUser: (user: UserInfo) => set({ userInfo: user }),

  // 사용자 모달창 여부 설정
  setPassModal: (value: string) => set({ passModal: value }),

  // 로그아웃 처리
  logout: () => {
    set({
      userInfo: {
        email: '',
        name: '',
        authority: '',
        likeMusicCount: 0,
        myPlaylistCount: 0,
      },
      passModal: 'notLogIn',
    });
  },
}));
