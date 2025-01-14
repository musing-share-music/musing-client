import { useMemo, useState } from 'react';

import { getYoutubeVideoId } from 'features/createPost/lib/youtubeId';

/**
 * 음악 추천 폼의 상태를 관리하는 훅
 */
export const useFormState = () => {
  const [rating, setRating] = useState(0);
  const [youtubeUrl, setYoutubeUrl] = useState('');

  const youtubeVideoId = useMemo(() => getYoutubeVideoId(youtubeUrl) || '', [youtubeUrl]);

  return { rating, setRating, youtubeUrl, setYoutubeUrl, youtubeVideoId };
};
