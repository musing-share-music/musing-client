import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface FormData {
  title: string; // 게시글 제목
  content: string; // 게시글 내용
  files?: File; // 이미지 파일
}
type FormStore = {
  formData: FormData;
  updateFormData: <Key extends keyof FormData>(key: Key, value: FormData[Key]) => void;
};

/**
 * 공지사항 작성 폼의 상태를 관리하는 훅
 */
export const useFormStore = create<FormStore>()(
  devtools((set) => ({
    formData: {} as FormData,
    updateFormData: (key, value) =>
      set((state) => {
        return { formData: { ...state.formData, [key]: value } };
      }),
  })),
);
