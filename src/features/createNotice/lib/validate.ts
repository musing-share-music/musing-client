import { ZodError } from 'zod';

import { CreateFormSchema } from 'features/createNotice/model/formSchema';

import { CreateNoticeDto } from 'entities/notice/api/createNotice';

/**
 * form의 유효성 검증
 */
export const validateFormSchema = (form: CreateNoticeDto) => {
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
