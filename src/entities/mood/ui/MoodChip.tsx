import { ComponentProps } from 'react';

import { CheckBox } from 'shared/ui';

type MoodChipProps = ComponentProps<typeof CheckBox>;

export const MoodChip = ({ id, text, checked, onChange, ...props }: MoodChipProps) => {
  return (
    <CheckBox key={id} id={`mood-${id}`} text={text} name="mood" checked={checked} onChange={onChange} {...props} />
  );
};
