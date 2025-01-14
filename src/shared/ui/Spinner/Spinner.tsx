import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { ClipLoader } from 'react-spinners';

interface SpinnerProps {
  color?: string;
  size?: number;
  isLoading?: boolean;
}

export const Spinner: React.FC<SpinnerProps> = ({ color, size, isLoading }) => {
  const theme = useTheme();
  const spinnerColor = color || theme.colors.primary1;
  const spinnerSize = size || 100;

  return (
    <SpinnerContainer>
      <ClipLoader
        color={spinnerColor}
        loading={isLoading}
        size={spinnerSize}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </SpinnerContainer>
  );
};

// 스타일: 스피너 컨테이너
const SpinnerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  width: 100%;
  height: 100%;
`;
