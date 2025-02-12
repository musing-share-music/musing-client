import styled from '@emotion/styled';
import { ComponentProps } from 'react';

interface InputProps extends ComponentProps<'input'> {
  errorMessage?: string; // 에러 메세지
}

export const TextInput = ({ value, errorMessage, ...props }: InputProps) => {
  return (
    <Box>
      <StyledInput {...props} type="text" value={value} />
      {errorMessage && <ErrorMessage>{errorMessage} </ErrorMessage>}
    </Box>
  );
};

const Box = styled.div`
  position: relative;
`;

const ErrorMessage = styled.p`
  position: absolute;
  margin-top: 6px;
  color: ${({ theme }) => theme.colors.secondary1};
`;

const StyledInput = styled.input`
  width: 100%;
  height: 60px;
  padding: 16px 24px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors[300]};
  color: ${({ theme }) => theme.colors.white};

  ::placeholder {
    ${({ theme }) => theme.fonts.wantedSans.B4};
    color: ${({ theme }) => theme.colors[200]};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary1Hover1};
  }
`;
