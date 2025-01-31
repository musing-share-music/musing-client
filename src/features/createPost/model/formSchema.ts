import { string, z } from 'zod';

export const CreateFormSchema = z.object({
  title: string({
    required_error: '제목을 입력해 주세요.',
  }).trim(),
  musicTitle: string({ required_error: '곡 제목을 입력해 주세요.' }).trim(),
  artist: string({ required_error: '아티스트 명을 입력해 주세요.' }).trim(),
  youtubeLink: string({ required_error: '유튜브 링크를 입력해 주세요.' }).trim(),
  hashtags: string({
    required_error: '분위기를 선택해 주세요.',
  })
    .trim()
    .array(),
  genre: string({ required_error: '장르를 선택해 주세요.' }).trim(),
  content: string({
    required_error: '내용을 입력해 주세요.',
  }).trim(),
});
