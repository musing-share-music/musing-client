import styled from '@emotion/styled';

import { DEFAULT_PROFILE_IMAGE } from 'entities/user/config';

interface ProfileImageProps {
  width: number;
  height: number;
  alt?: string;
  src?: string;
}

export const ProfileImage = ({ width, height, src }: ProfileImageProps) => {
  return <Profile width={width} height={height} src={src || DEFAULT_PROFILE_IMAGE} />;
};

const Profile = styled.img<{ width: number; height: number }>`
  min-width: ${({ width }) => width}px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: 12px;
  object-fit: contain;
`;
