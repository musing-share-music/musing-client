# musing  
musing 음악공유사이트
**수정날짜:** 2024-11-21

# Directory
    src/
    │
    ├── app/ # 애플리케이션 전역 설정 및 초기화 관련 디렉토리
    │   ├── providers/ # 애플리케이션 레벨의 컨텍스트 제공자들
    │   │   ├── ThemeProvider.tsx # 테마 관련 전역 상태 관리
    │   │   └── RouterProvider.tsx # 라우팅 설정 및 관리
    │   ├── styles/ # 전역 스타일 및 CSS 리셋
    │   │   ├── global.css # 전체 애플리케이션의 글로벌 스타일
    │   │   └── reset.css # CSS 초기화 및 기본 스타일 리셋
    │   └── index.tsx # 애플리케이션 진입점, 주요 설정 및 렌더링
    │
    ├── pages/ # 라우트에 해당하는 페이지 컴포넌트들
    │   ├── HomePage/ # 메인 페이지 관련 컴포넌트
    │   │   ├── index.tsx # 페이지 컴포넌트 
    │   │   └── HomePage.module.css # 페이지별 스타일
    │   ├── ProfilePage/ # 프로필 페이지 
    │   │   ├── index.tsx
    │   │   └── ProfilePage.module.css
    │   └── NotFoundPage/ # 404 에러 페이지
    │       ├── index.tsx
    │       └── NotFoundPage.module.css
    │
    ├── widgets/ # 복합적인 UI 컴포넌트 (여러 엔티티/피처 포함)
    │   ├── Navbar/ # 네비게이션 바 위젯
    │   │   ├── index.tsx # 네비게이션 바 컴포넌트
    │   │   ├── Navbar.module.css # 네비게이션 스타일
    │   │   └── Navbar.types.ts # 타입 정의
    │   ├── Sidebar/ # 사이드바 위젯
    │   │   ├── index.tsx
    │   │   ├── Sidebar.module.css
    │   │   └── Sidebar.types.ts
    │   └── UserCard/ # 사용자 카드 위젯
    │       ├── index.tsx
    │       ├── UserCard.module.css
    │       └── UserCard.types.ts
    │
    ├── features/ # 비즈니스 로직과 사용자 상호작용 관련 기능
    │   ├── Authentication/ # 인증 관련 기능 모음
    │   │   ├── login/ # 로그인 기능
    │   │   │   ├── ui/ # 로그인 관련 UI 컴포넌트
    │   │   │   │   └── LoginForm.tsx # 로그인 폼 컴포넌트
    │   │   │   ├── model/ # 비즈니스 로직 및 상태 관리
    │   │   │   │   └── useLogin.ts # 로그인 훅
    │   │   │   └── api/ # API 관련 로직
    │   │   │       └── loginApi.ts # 로그인 API 함수
    │   │   └── registration/ # 회원가입 기능
    │   │       ├── ui/
    │   │       │   └── RegistrationForm.tsx
    │   │       ├── model/
    │   │       │   └── useRegistration.ts
    │   │       └── api/
    │   │           └── registrationApi.ts
    │   └── Profile/ # 프로필 관련 기능
    │       ├── ui/
    │       │   └── ProfileEditForm.tsx # 프로필 수정 폼
    │       ├── model/
    │       │   └── useProfileEdit.ts # 프로필 수정 로직
    │       └── api/
    │           └── profileApi.ts # 프로필 관련 API
    │
    ├── entities/ # 도메인 엔티티 관련 로직
    │   ├── User/ # 사용자 엔티티 
    │   │   ├── model/ # 상태 관리 및 타입 정의
    │   │   │   ├── types.ts # 사용자 관련 타입
    │   │   │   └── userSlice.ts # 사용자 상태 관리 (Redux)
    │   │   ├── ui/ # 사용자 관련 UI 컴포넌트
    │   │   │   └── UserAvatar.tsx # 사용자 아바타 컴포넌트
    │   │   └── api/ # 사용자 관련 API
    │   │       └── userApi.ts
    │   ├── Post/ # 게시물 엔티티
    │   │   ├── model/
    │   │   │   ├── types.ts
    │   │   │   └── postSlice.ts
    │   │   ├── ui/
    │   │   │   └── PostCard.tsx
    │   │   └── api/
    │   │       └── postApi.ts
    │   └── Comment/ # 댓글 엔티티
    │       ├── model/
    │       │   ├── types.ts
    │       │   └── commentSlice.ts
    │       ├── ui/
    │       │   └── CommentItem.tsx
    │       └── api/
    │           └── commentApi.ts
    │
    ├── shared/ # 전역에서 공유되는 재사용 가능한 요소들
    │   ├── ui/ # 공용 UI 컴포넌트
    │   │   ├── Button/ # 범용 버튼 컴포넌트
    │   │   │   ├── index.tsx
    │   │   │   └── Button.module.css
    │   │   ├── Input/ # 범용 입력 컴포넌트
    │   │   │   ├── index.tsx
    │   │   │   └── Input.module.css
    │   │   └── Modal/ # 모달 컴포넌트
    │   │       ├── index.tsx
    │   │       └── Modal.module.css
    │   ├── lib/ # 유틸리티 및 헬퍼 함수들
    │   │   ├── hooks/ # 공용 커스텀 훅
    │   │   │   ├── useDebounce.ts # 디바운스 훅
    │   │   │   └── useLocalStorage.ts # 로컬스토리지 훅
    │   │   └── utils/ # 유틸리티 함수
    │   │       ├── formatDate.ts # 날짜 포맷팅
    │   │       └── validation.ts # 공용 검증 로직
    │   └── config/ # 전역 설정 및 상수
    │       ├── constants.ts # 전역 상수
    │       └── routes.ts # 라우트 경로 상수
    │
    └── index.tsx # 애플리케이션 최종 진입점

# Create
    npx create-react-app musing --template typescript

# Start & Build
    npm start
    npm run build

# Install npm
    Axios (서버 통신)
        - npm install axios

    React Router (라우터)
        - npm i react-router-dom 