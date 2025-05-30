import styled from '@emotion/styled';

type TagProps = {
  type: 'genre' | 'mood';
  name: string;
};

/**
 * 장르/분위기 태그
 */
export const CommonTag = ({ type, name }: TagProps) => {
  return (
    <>
      <Tag type={type}>{name}</Tag>
    </>
  );
};

// Styled component에서 prop 타입 정의
const Tag = styled.div<{ type: string }>`
  min-width: 68px;
  height: 33px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors[400]};
  color: ${({ theme, type }) => (type === 'genre' ? theme.colors.primary1 : theme.colors.secondary2)};
  ${({ theme }) => theme.fonts.wantedSans.B6};

  display: flex;
  justify-content: center;
  align-items: center;
`;
