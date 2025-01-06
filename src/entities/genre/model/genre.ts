export type Genre = { id: string; text: string };
export type GenreId = Genre['id'];
export const GENRE: Genre[] = [
  {
    id: 'K-POP',
    text: 'K-POP',
  },
  { id: 'J-POP', text: 'J-POP' },
  { id: 'classic', text: '클래식 ' },
  { id: 'ballade', text: '발라드' },
  {
    id: 'alternative',
    text: '얼터너티브',
  },
  {
    id: 'indie',
    text: '인디',
  },
  {
    id: 'disco',
    text: '디스코',
  },
  {
    id: 'rock',
    text: '록',
  },
  {
    id: 'metal',
    text: '메탈',
  },
  {
    id: 'synthPop',
    text: '신디팝',
  },
  { id: 'r&b', text: 'R&B' },
  { id: 'newWave', text: '뉴웨이브' },
  {
    id: 'folk',
    text: '포크',
  },
  {
    id: 'country',
    text: '컨트리',
  },
  { id: 'blues', text: '블루스' },
  { id: 'electronic', text: '일렉트로닉' },
  {
    id: 'trot',
    text: '트로트',
  },
  { id: 'ost', text: 'OST' },
  { id: 'ccm', text: 'CCM' },
  { id: 'musical', text: '뮤지컬' },
  { id: 'edm', text: 'EDM' },
  { id: 'shoegazing', text: '슈게이징' },
] as const;
