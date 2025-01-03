export type Mood = { id: string; text: string };
export type MoodId = Mood['id'];
export const MOOD: Mood[] = [
  { id: '01', text: '편안한' },
  { id: '02', text: '차분한' },
  { id: '03', text: '조용한' },
  { id: '04', text: '신나는' },
  { id: '05', text: '슬픈' },
  { id: '06', text: '빠른' },
  { id: '07', text: '느린' },
  { id: '08', text: '경쾌한' },
  { id: '09', text: '잔잔한' },
  { id: '10', text: '집중' },
  { id: '11', text: '운동' },
  { id: '12', text: '힙한' },
  { id: '13', text: '올드한' },
  { id: '14', text: '뉴웨이브' },
  { id: '15', text: '포크' },
  { id: '16', text: '컨트리' },
] as const;
