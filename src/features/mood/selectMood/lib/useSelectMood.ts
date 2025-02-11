import { useState } from 'react';

import { Mood, MoodId } from 'entities/mood/model/mood';

export const useSelectMood = (initialChecked?: Mood[]) => {
  const [selectedMoodId, setSelectedMoodId] = useState<MoodId[]>(() => {
    return initialChecked?.map((m) => m.id).filter((m) => m) || [];
  });

  const handleMoodCheck = ({ id, checked }: { id: number; checked: boolean }) => {
    if (checked) {
      setSelectedMoodId((prev) => {
        return [...prev, id];
      });
    } else {
      setSelectedMoodId((prev) => {
        return prev.filter((moodId) => moodId !== id);
      });
    }
  };

  return { handleMoodCheck, selectedMoodId };
};
