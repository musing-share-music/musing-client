import styled from '@emotion/styled';
import React, { forwardRef } from 'react';

interface EditableElementProps {
  onChange: (value: string) => void;
  placeholder: string;
}

export const EditableElement = forwardRef<HTMLSpanElement, EditableElementProps>(({ onChange, placeholder }, ref) => {
  const handleInput = (event: React.FormEvent<HTMLSpanElement>) => {
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
      data-placeholder={placeholder}
    />
  );
});

const StyledEditableElement = styled.span`
  &:empty::before {
    content: attr(data-placeholder);
  }
`;
