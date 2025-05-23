// 로그인 사용자 정보 타입 정의
interface UserState {
  userInfo: UserInfo;
  passModal: string;
  setUser: (user: UserInfo) => void;
  setPassModal: (value: string) => void;
  isLogin: () => boolean;
  logout: () => void;
}

// UserInfo 타입 정의
export type UserInfo = {
  userId: string;
  email: string;
  name: string;
  authority: string;
  likeMusicCount: number;
  myPlaylistCount: number;
};
