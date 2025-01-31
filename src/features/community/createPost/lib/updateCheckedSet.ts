export const updateCheckedSet = <T extends string>(
  e: React.ChangeEvent<HTMLInputElement>,
  updateState: React.Dispatch<React.SetStateAction<Set<T>>>,
) => {
  const { id, checked } = e.target;

  updateState((prev) => {
    const updatedSet = new Set(prev);

    if (checked) {
      updatedSet.add(id as T);
    } else {
      updatedSet.delete(id as T);
    }

    return updatedSet;
  });
};
