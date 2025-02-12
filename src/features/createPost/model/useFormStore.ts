import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface FormData {
  youtubeUrl: string; // youtube 링크
  artist: string; // 아티스트명
  musicTitle: string; // 곡 제목
  title: string; // 게시글 제목
  content: string; // 게시글 내용
  mood: number[]; // 분위기 id
  genre: number; // 장르 id
  image?: File; // 이미지 파일
}
type FormStore = {
  formData: FormData;
  isValidYoutubeUrl: boolean; // YouTube URL이 유효한지 판별하는 값
  updateFormData: <Key extends keyof FormData>(key: Key, value: FormData[Key]) => void;
  setIsValidYoutubeUrl: (isValid: boolean) => void;
};

/**
 * 음악 추천 폼의 상태를 관리하는 훅
 */
export const useFormStore = create<FormStore>()(
  devtools((set) => ({
    formData: {} as FormData,
    isValidYoutubeUrl: false,
    updateFormData: (key, value) =>
      set((state) => {
        return { formData: { ...state.formData, [key]: value } };
      }),
    setIsValidYoutubeUrl: (isValid) =>
      set(() => {
        return { isValidYoutubeUrl: isValid };
      }),
  })),
);
