import styled from '@emotion/styled';

interface ProfileImageProps {
  width: number;
  height: number;
  src: string;
}

export const ProfileImage = ({ width, height, src }: ProfileImageProps) => {
  return <Profile width={width} height={height} src={src} />;
};

const Profile = styled.img<{ width: number; height: number }>`
  min-width: ${({ width }) => width};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 12px;
  object-fit: contain;
`;
