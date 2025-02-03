import { ComponentProps } from 'react';

import { CheckBox } from 'shared/ui';

type GenreChipProps = ComponentProps<typeof CheckBox>;

export const GenreChip = ({ id, text, checked, onChange, ...props }: GenreChipProps) => {
  return (
    <CheckBox key={id} id={`genre-${id}`} text={text} name="genre" checked={checked} onChange={onChange} {...props} />
  );
};
