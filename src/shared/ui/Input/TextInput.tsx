import styled from '@emotion/styled';
import { ComponentProps } from 'react';

type InputProps = ComponentProps<'input'>;

export const TextInput = ({ value, ...props }: InputProps) => {
  return <StyledInput {...props} type="text" value={value} />;
};

const StyledInput = styled.input`
  width: 100%;
  height: 60px;
  padding: 16px 24px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors[300]};

  ::placeholder {
    ${({ theme }) => theme.fonts.wantedSans.B4};
    color: ${({ theme }) => theme.colors[200]};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary1Hover1};
  }
`;
