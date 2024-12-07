import styled from '@emotion/styled';

const ListColumArea = styled.div`
  width: 800px;
  height: 80px;
  gap: 0px;
  border-radius: 4px 0px 0px 0px;

  &:hover {
    background-color: ${({ theme }) => theme.colors[400]};
  }
`

const ListColum = styled.div`
  width: 784px;
  height: 64px;
  display: flex;
  gap: 24px;
  cursor: pointer;
`

const ListDate = styled.div`
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${({ theme }) => theme.fonts.wantedSans.B4};
  color: ${({ theme }) => theme.colors.primary2};
`;

const ListImg = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 5px;
`

const ListContents = styled.div`
  display:flex;
  gap: 4px;
`;

const ListContent1 = styled.div`
  display:flex;
  flex-direction: column;
  margin: auto;
`;

const ContentsTitle1 = styled.div`
 ${({ theme }) => theme.fonts.wantedSans.B6};
  color: ${({ theme }) => theme.colors[200]};
`

const ContentsTitle2 = styled.div`
 ${({ theme }) => theme.fonts.wantedSans.B3};
  color: ${({ theme }) => theme.colors.white};
  max-width: 396px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const ListContent2 = styled.div`
  display:flex;
  flex-direction: column;
  margin: auto;
  gap: 4px;
  width: 200px;
`;

const ContentsTitle3 = styled.div`
 ${({ theme }) => theme.fonts.wantedSans.B6};
  color: ${({ theme }) => theme.colors[200]};
  max-width: 192px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
  margin-left: 8px;
`

const ContentsTitle4 = styled.div`
 ${({ theme }) => theme.fonts.wantedSans.B6};
  color: ${({ theme }) => theme.colors[200]};
  max-width: 192px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
  margin-left: 8px;
`

const StyledHr = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors[400]};
  margin: 0; /* 필요에 따라 여백 조정 */
  width: 784px;
`;
    

/**
 * 재사용 가능한 카드 컴포넌트
 * @param {Object} props - 카드 컴포넌트 props
 * @param {string} props.image - 카드 이미지 경로
 * @param {string} props.title - 카드 타이틀
 * @param {string} props.subtitle - 카드 서브타이틀
 */
const List = ({ image, title, subtitle }) => (
  <>
  <ListColumArea>
    <ListColum>
      <ListDate>17:00</ListDate>
      <ListImg src={image} alt="이미지"></ListImg>
      <ListContents>
        <ListContent1>
          <ContentsTitle1>{title}</ContentsTitle1>
          <ContentsTitle2>{subtitle}</ContentsTitle2>
        </ListContent1>

        <ListContent2>
          <ContentsTitle3>
            <span>댓글 7 · 추천 1 · 조회 14</span>
          </ContentsTitle3>
          <ContentsTitle4>여기도 max-width 200으로 초과시</ContentsTitle4>
        </ListContent2>
      </ListContents>
    </ListColum>
  </ListColumArea>
    <StyledHr />
  </>
);

export default List;