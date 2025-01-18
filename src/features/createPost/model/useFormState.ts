import { useState } from 'react';

interface FormData {
  rating: number; // 별점
  youtubeUrl: string; // youtube 링크
  artist: string; // 아티스트명
  musicTitle: string; // 곡 제목
  title: string; // 게시글 제목
  content: string; // 게시글 내용
  mood: string[]; // 분위기
  genre: string; // 장르
  image?: File; // 이미지 파일
}

/**
 * 음악 추천 폼의 상태를 관리하는 훅
 */
export const useFormState = () => {
  const [formData, setFormData] = useState<FormData>({} as FormData);

  // formData를 업데이트
  const updateFormData = <Key extends keyof FormData>(key: Key, value: FormData[Key]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return { formData, updateFormData };
};
