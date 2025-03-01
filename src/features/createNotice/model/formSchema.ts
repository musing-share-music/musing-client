import { string, z } from 'zod';

import { ERROR_MESSAGE } from 'features/createPost/lib/errorMessage';

export const CreateFormSchema = z.object({
  title: string({
    required_error: ERROR_MESSAGE.title.required,
  }).trim(),
  content: string({
    required_error: ERROR_MESSAGE.content.required,
  }).trim(),
});
