import { GenreId } from 'entities/genre/model/genre';
import { MoodId } from 'entities/mood/model/mood';

/**
 * 선택한 태그가 유효한지 확인
 */
export const validateTag = ({
  selectedMoods,
  selectedGenres,
}: {
  selectedMoods: Set<MoodId>;
  selectedGenres: Set<GenreId>;
}): boolean => {
  // 최소 1개 이상 태그를 선택
  return selectedMoods.size === 0 || selectedGenres.size === 0;
};
