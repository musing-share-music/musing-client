import styled from '@emotion/styled';
import React, { forwardRef } from 'react';

interface EditableElementProps {
  onChange: (value: string) => void;
  placeholder: string;
}

export const EditableElement = forwardRef<HTMLDivElement, EditableElementProps>(({ onChange, placeholder }, ref) => {
  const handleInput = (event: React.FormEvent<HTMLDivElement>) => {
    const value = event.currentTarget.textContent || '';
    onChange(value);
  };

  return (
    <StyledEditableElement
      ref={ref}
      suppressContentEditableWarning
      role="textbox"
      contentEditable
      onInput={handleInput}
      placeholder={placeholder}
    />
  );
});

const StyledEditableElement = styled.div`
  display: inline;

  &:empty::before {
    content: attr(placeholder);
  }
`;
