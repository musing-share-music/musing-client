import styled from '@emotion/styled';
import { ComponentProps } from 'react';

import { commonStyles } from 'shared/styles/common';

type CheckBoxProps = Omit<ComponentProps<'input'>, 'type'> & { text: string };

export const CheckBox = ({ text, id, name, ...props }: CheckBoxProps) => {
  return (
    <CheckBoxWrapper>
      <StyledCheck type="checkbox" id={id} name={name || id} {...props} />
      <Label htmlFor={id}>{text}</Label>
    </CheckBoxWrapper>
  );
};

const CheckBoxWrapper = styled.div``;

const Label = styled.label`
  display: block;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors[500]};
  cursor: pointer;
  ${commonStyles.hoverTransition}

  &:hover {
    background: ${({ theme }) => theme.colors[300]};
  }
`;

const StyledCheck = styled.input`
  display: none;
  &:checked + label {
    background: ${({ theme }) => theme.colors[300]};
  }
`;
