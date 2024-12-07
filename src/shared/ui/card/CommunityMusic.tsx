import styled from '@emotion/styled';

// 게시판 전체영역
const CommunityContainer = styled.div`
  width: 1280px;
  height: 616px;
`;

//게시판 음악 타이틀
const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const PageTitle = styled.div`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.H1};
  margin-right: 16px;
`;

const SubTitle = styled.div`
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.B5};
  margin-top: 12px;
`;

// 장르의 음악 리스트 영역
const CommunityBlock = styled.div`
  display: flex;
  gap: 24px;
  border-radius: 12px;
  padding: 24px;
  width: 1280px;
  height: 560px;
  background-color: ${({ theme }) => theme.colors[600]};
`;

// 이미지 래퍼 스타일
const PlayListBlock = styled.div`
  width: 376px;
  height: 512px;
  border-radius: 8px;
`;

const PlayListImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  border-radius: 8px;
`;

const CommunityListBlock = styled.div`
  width: 832px;
  height: 512px;
  display: flex;
  gap: 4px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors[500]};
  padding: 24px;
  border-radius: 1px;
`;

const CommunityListWrapper = styled.div`
  width: 800px;
  height: 80px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors[400]};
  }
`;

const CommunityList = styled.div`
  width: 784px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ListDate = styled.div`
  width: 64px;
  height: 64px;
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${({ theme }) => theme.fonts.wantedSans.B4};
  color: ${({ theme }) => theme.colors.primary2};
`;

const ListImg = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 20px;
`;

const ListContent = styled.div`
  width: 612px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentInfo = styled.div`
  width: 396px;
  height: 52px;
`;

const ContentsTitle = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B6};
  color: ${({ theme }) => theme.colors[200]};
`;

const ContentsDescription = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B3};
  color: ${({ theme }) => theme.colors.white};
  max-width: 396px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ActivityInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 200px;
  height: 52px;
  margin-left: 16px;
`;

const ActivityStatus = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B6};
  color: ${({ theme }) => theme.colors[200]};
  max-width: 192px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
`;

const ActivityName = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B6};
  color: ${({ theme }) => theme.colors[200]};
  max-width: 192px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
`;

const StyledHr = styled.hr`
  border: 1px solid ${({ theme }) => theme.colors[400]};
  margin: 0; /* 필요에 따라 여백 조정 */
  width: 784px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

/**
 * 재사용 가능한 카드 컴포넌트
 * @param {Object} props - 카드 컴포넌트 props
 * @param {string} props.image - 카드 이미지 경로
 * @param {string} props.title - 카드 타이틀
 * @param {string} props.subtitle - 카드 서브타이틀
 */
const List = ({ image, title, subtitle }) => (
  <CommunityContainer>
    <TitleBlock>
      <PageTitle>음악 추천 게시판</PageTitle>
      <SubTitle>취향을 발견하는 또다른 방법</SubTitle>
    </TitleBlock>

    <CommunityBlock>
      <PlayListBlock>
        <PlayListImage src={image}></PlayListImage>
      </PlayListBlock>

      <CommunityListBlock>
        <CommunityListWrapper>
          <CommunityList>
            <ListDate>17:00</ListDate>
            <ListImg src={image} alt="이미지"></ListImg>
            <ListContent>
              <ContentInfo>
                <ContentsTitle>Highway Tune · Greta Van Fleet</ContentsTitle>
                <ContentsDescription>max-witdh 396이고 초과시 ...으로 나오도록 설정</ContentsDescription>
              </ContentInfo>

              <ActivityInfo>
                <ActivityStatus>댓글 7 · 추천 1 · 조회 14</ActivityStatus>
                <ActivityName>여기도 max-width 200으로 초과시</ActivityName>
              </ActivityInfo>
            </ListContent>
          </CommunityList>
        </CommunityListWrapper>
        <StyledHr></StyledHr>

        <CommunityListWrapper>
          <CommunityList>
            <ListDate>17:00</ListDate>
            <ListImg src={image} alt="이미지"></ListImg>
            <ListContent>
              <ContentInfo>
                <ContentsTitle>Highway Tune · Greta Van Fleet</ContentsTitle>
                <ContentsDescription>max-witdh 396이고 초과시 ...으로 나오도록 설정</ContentsDescription>
              </ContentInfo>

              <ActivityInfo>
                <ActivityStatus>댓글 7 · 추천 1 · 조회 14</ActivityStatus>
                <ActivityName>여기도 max-width 200으로 초과시</ActivityName>
              </ActivityInfo>
            </ListContent>
          </CommunityList>
        </CommunityListWrapper>
        <StyledHr></StyledHr>

        <CommunityListWrapper>
          <CommunityList>
            <ListDate>17:00</ListDate>
            <ListImg src={image} alt="이미지"></ListImg>
            <ListContent>
              <ContentInfo>
                <ContentsTitle>Highway Tune · Greta Van Fleet</ContentsTitle>
                <ContentsDescription>max-witdh 396이고 초과시 ...으로 나오도록 설정</ContentsDescription>
              </ContentInfo>

              <ActivityInfo>
                <ActivityStatus>댓글 7 · 추천 1 · 조회 14</ActivityStatus>
                <ActivityName>여기도 max-width 200으로 초과시</ActivityName>
              </ActivityInfo>
            </ListContent>
          </CommunityList>
        </CommunityListWrapper>
        <StyledHr></StyledHr>

        <CommunityListWrapper>
          <CommunityList>
            <ListDate>17:00</ListDate>
            <ListImg src={image} alt="이미지"></ListImg>
            <ListContent>
              <ContentInfo>
                <ContentsTitle>Highway Tune · Greta Van Fleet</ContentsTitle>
                <ContentsDescription>max-witdh 396이고 초과시 ...으로 나오도록 설정</ContentsDescription>
              </ContentInfo>

              <ActivityInfo>
                <ActivityStatus>댓글 7 · 추천 1 · 조회 14</ActivityStatus>
                <ActivityName>여기도 max-width 200으로 초과시</ActivityName>
              </ActivityInfo>
            </ListContent>
          </CommunityList>
        </CommunityListWrapper>
        <StyledHr></StyledHr>

        <CommunityListWrapper>
          <CommunityList>
            <ListDate>17:00</ListDate>
            <ListImg src={image} alt="이미지"></ListImg>
            <ListContent>
              <ContentInfo>
                <ContentsTitle>Highway Tune · Greta Van Fleet</ContentsTitle>
                <ContentsDescription>max-witdh 396이고 초과시 ...으로 나오도록 설정</ContentsDescription>
              </ContentInfo>

              <ActivityInfo>
                <ActivityStatus>댓글 7 · 추천 1 · 조회 14</ActivityStatus>
                <ActivityName>남재상</ActivityName>
              </ActivityInfo>
            </ListContent>
          </CommunityList>
        </CommunityListWrapper>
      </CommunityListBlock>
    </CommunityBlock>
  </CommunityContainer>

  /* <ListColumArea>
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
    <StyledHr /> */
);

export default List;
