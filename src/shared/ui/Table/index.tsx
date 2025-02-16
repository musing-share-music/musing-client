import styled from '@emotion/styled';

import { SkeletonBox } from 'shared/ui';

export interface TableHead {
  key: string;
  content: string | React.ReactNode;
  width?: number; // 각 열의 넓이는 퍼센티지로 지정
}

type TableKeyUnion<T extends readonly TableHead[]> = T[number]['key'];

// head의 키와 일치하는 데이터만 가질 수 있음
export type TableData<T extends readonly TableHead[]> = {
  [key in TableKeyUnion<T>]: string | React.ReactNode;
} & {};

interface TableProps<T extends readonly TableHead[]> {
  head: T;
  data: TableData<T>[];
  isLoading?: boolean;
}

// 관리자 게시판 리스트 컴포넌트
export const Table = <T extends readonly TableHead[]>({ head, data, isLoading }: TableProps<T>) => {
  return (
    <Container>
      <StyledTable>
        <THead>
          {/* 로딩 중 스켈레톤 ui */}
          {isLoading && (
            <tr>
              <Th>
                <SkeletonBox height={60} />
              </Th>
            </tr>
          )}
          {!isLoading && (
            <tr>
              {head.map((item) => (
                <Th
                  key={item.key}
                  style={{
                    width: `${item.width}%`,
                  }}
                >
                  {item.content}
                </Th>
              ))}
            </tr>
          )}
        </THead>

        <TBody>
          {/* 로딩 중 스켈레톤 ui */}
          {isLoading &&
            Array(6)
              .fill(0)
              .map((_, idx) => (
                <tr key={idx}>
                  <Td>
                    <SkeletonBox height={40} />
                  </Td>
                </tr>
              ))}
          {!isLoading &&
            data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {head.map((header) => (
                  <Td key={`${rowIndex}-${header.key}`} width={1}>
                    {row[header.key as keyof typeof row]}
                  </Td>
                ))}
              </tr>
            ))}
        </TBody>
      </StyledTable>
    </Container>
  );
};
const Container = styled.div``;
const StyledTable = styled.table`
  width: 100%;
  background: ${({ theme }) => theme.colors[700]};
`;
const THead = styled.thead`
  border-top: 1px solid ${({ theme }) => theme.colors[400]};
  border-bottom: 1px solid ${({ theme }) => theme.colors[400]};
  color: ${({ theme }) => theme.colors[100]};
  text-align: left;

  ${({ theme }) => theme.fonts.wantedSans.B4};
`;
const Th = styled.th`
  padding: 16px 0;
  &:first-child {
    padding-left: 64px;
  }
  &:last-child {
    padding-right: 64px;
  }
`;

const TBody = styled.tbody``;
const Td = styled.td`
  padding: 16px 0;
  color: ${({ theme }) => theme.colors[200]};
  text-align: left;
  border-bottom: 1px solid ${({ theme }) => theme.colors[400]};
  &:first-child {
    padding-left: 64px;
  }
  &:last-child {
    padding-right: 64px;
  }
`;
