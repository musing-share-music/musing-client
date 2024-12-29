import styled from '@emotion/styled';
import { ComponentProps } from 'react';

type TextAreaProps = ComponentProps<'textarea'>;

export const TextArea = ({ ...props }: TextAreaProps) => {
  return <StyledTextArea {...props} />;
};

const StyledTextArea = styled.textarea`
  display: flex;
  width: 100%;
  min-height: 116px;
  resize: none;
  padding: 20px 24px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors[300]};
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.B4};
  color: ${({ theme }) => theme.colors[100]};
  &::placeholder {
    ${({ theme }) => theme.colors[200]};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors[600]};
    color: ${({ theme }) => theme.colors[200]};
  }
`;
