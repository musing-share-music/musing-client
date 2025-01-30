import { optional, string, z } from 'zod';

export const CreateFormSchema = z.object({
  userEmail: optional(string()), // TODO 로그인 기능 개발 후 해당 필드 삭제
  title: string().trim(),
  musicTitle: string().trim(),
  artist: string().trim(),
  youtubeLink: string().trim(),
  hashtags: string().trim().array(),
  genre: string().trim(),
  content: string().trim(),
});
