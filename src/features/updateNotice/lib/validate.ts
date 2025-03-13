import { ZodError } from 'zod';

import { UpdateFormSchema } from 'features/updateNotice/model/formSchema';

import { UpdateNoticeDto } from 'entities/notice/api/updateNotice';

/**
 * form의 유효성 검증
 */
export const validateFormSchema = (form: UpdateNoticeDto) => {
  const validation = UpdateFormSchema.safeParse(form);
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
