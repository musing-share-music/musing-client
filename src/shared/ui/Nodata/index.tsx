import styled from '@emotion/styled';

type NodataProps = {
  Comment: string;
};

export const Nodata = ({ Comment }: NodataProps) => {
  return (
    <NodataBlock>
      <NodataText>{Comment}</NodataText>
    </NodataBlock>
  );
};

const NodataBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors[600]};
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors[600]};
`;

const NodataText = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B3};
  color: ${({ theme }) => theme.colors[200]};
`;
