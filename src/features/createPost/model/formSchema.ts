import { string, z } from 'zod';

import { ERROR_MESSAGE } from 'features/createPost/lib/errorMessage';

export const CreateFormSchema = z.object({
  title: string({
    required_error: ERROR_MESSAGE.title.required,
  }).trim(),
  musicTitle: string({ required_error: ERROR_MESSAGE.musicTitle.required }).trim(),
  artist: string({ required_error: ERROR_MESSAGE.artist.required }).trim(),
  youtubeLink: string({ required_error: ERROR_MESSAGE.youtubeLink.required }).trim(),
  hashtags: string({
    required_error: ERROR_MESSAGE.hashtags.required,
  })
    .trim()
    .array(),
  genre: string({ required_error: ERROR_MESSAGE.genre.required }).trim(),
  content: string({
    required_error: ERROR_MESSAGE.content.required,
  }).trim(),
});
