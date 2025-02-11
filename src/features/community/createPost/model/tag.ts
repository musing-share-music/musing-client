import { GenreId } from 'entities/genre/model/genre';
import { MoodId } from 'entities/mood/model/mood';

export type SelectTagId = {
  type: 'genre' | 'mood';
  id: GenreId | MoodId;
};
