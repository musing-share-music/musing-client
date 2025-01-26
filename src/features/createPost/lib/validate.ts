import { ZodError } from 'zod';

import { CreateFormSchema } from 'features/createPost/model/formSchema';

import { Genre } from 'entities/genre/model/genre';
import { Mood } from 'entities/mood/model/mood';
import { CreatePostDto } from 'entities/post/api/createPost';

/**
 * 선택한 태그가 유효한지 확인
 */
export const validateTag = ({
  selectedMood,
  selectedGenre,
}: {
  selectedMood: Mood[] | null;
  selectedGenre: Genre[] | null;
}): boolean => {
  // 장르 1개, 분위기 최소 1개
  if (!selectedGenre || !selectedMood) return false;
  return selectedMood.length > 0 && selectedGenre.length === 1;
};

/**
 * form의 유효성 검증
 */
export const validateFormSchema = (form: CreatePostDto) => {
  const validation = CreateFormSchema.safeParse(form);
  return validation;
};

/**
 * form validation의 에러 메세지를 반환
 */
export const getFromErrorMessage = (error: ZodError) => {
  const errorMessages = error.flatten().fieldErrors;
  const keys = Object.keys(errorMessages) as Array<keyof typeof errorMessages>;
  for (const key of keys) {
    const messages = errorMessages[key];
    if (messages && messages.length) {
      return messages[0];
    }
  }
  return '';
};
