// 로그인 사용자 정보 타입 정의
interface UserState {
  userInfo: UserInfo;
  setUser: (user: UserInfo) => void;
  isAdmin: () => boolean;
  logout: () => void;
}

// UserInfo 타입 정의
export type UserInfo = {
  email: string;
  name: string;
  authority: string;
  likeMusicCount: number;
  myPlaylistCount: number;
};
