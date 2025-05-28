import styled from '@emotion/styled';

export const TrackInfoContainer = styled.div`
  display: flex;
  gap: 16px;
`;

export const TrackInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ArtistName = styled.p`
  margin: 0px;
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.C1};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 150px;
`;
