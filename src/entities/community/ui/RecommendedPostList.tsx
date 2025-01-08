import styled from '@emotion/styled';
import { SetStateAction, useState } from 'react';

import { CommunityListInfo } from 'entities/community/model/types';

import { commonStyles } from 'shared/styles/common';
import { StarRatingInput } from 'shared/ui/Input/StarRatingInput';
import { CommonTag } from 'shared/ui/Tag';

const ComuContainer = styled.div`
  width: 1280px;
  height: 1980px;
  margin-top: 60px;
`;

const TitleBlock = styled.div`
  display: flex;
`;

const PageTitle = styled.div`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.T2};
`;

const CommunityList = styled.div`
  width: 100%;
  height: 1120px;
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors[700]};
  border-radius: 12px;
`;

const CommunityItem = styled.div`
  width: 296px;
  height: 458px;
`;

const CommunityImageWrapper = styled.div`
  width: 100%;
  height: 296px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors[500]};
`;

const CommunityImage = styled.img`
  width: 100%;
  height: 100%;
`;

const CommuityContent = styled.div`
  width: 100%;
  height: 142px;
  margin-top: 20px;
  position: relative;
`;

const CommunityInfo = styled.div`
  position: absolute;
  top: 0px;
  left: 8px;
  width: 280px;
  height: 60px;
`;

const CommunitySongInfo = styled.div`
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.B5};
`;

const CommunitySongDescription = styled.div`
  color: ${({ theme }) => theme.colors[100]};
  ${({ theme }) => theme.fonts.wantedSans.B2};
  margin-top: 4px;
  ${commonStyles.limitText};
`;

const CommunityAction = styled.div`
  position: absolute;
  bottom: 0px;
  left: 8px;
  width: 140px;
  height: 70px;
`;

const CommunityRating = styled.div`
  width: 129px;
  display: flex;
`;

const CommunityRatingNumber = styled.div`
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.B6};
  margin-left: 6px;
`;

const CommunityTagBlock = styled.div`
  width: 140px;
  height: 34px;
  display: flex;
  gap: 10px;
  margin-top: 12px;
`;

// const CommunityTag = styled.div`
//   width: 68px;
//   height: 33px;
//   border-radius: 4px;
//   background-color: ${({ theme }) => theme.colors[400]};
//   color: ${({ theme, id }) => (id === 'one' ? theme.colors.primary1 : theme.colors.secondary2)};
//   ${({ theme }) => theme.fonts.wantedSans.B6};
//   ${({ theme }) => theme.fonts.wantedSans.B6};

//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

const CommunityPagenation = styled.div<{ isActive: boolean }>`
  color: ${({ theme, isActive }) => (isActive ? theme.colors[100] : theme.colors[200])};
  ${({ theme }) => theme.fonts.wantedSans.B5};
  cursor: pointer;
`;

const CommuniySearchBlock = styled.div`
  width: 888px;
  height: 60px;
  margin-left: 196px;
  display: flex;
  gap: 20px;
  margin-top: 40px;
`;

const CommunitySearchSelect = styled.div`
  width: 148px;
  height: 60px;
  position: relative;
  border-radius: 36px;
  background-color: ${({ theme }) => theme.colors[500]};
  color: ${({ theme }) => theme.colors[100]};
  ${({ theme }) => theme.fonts.wantedSans.B4};
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-left: 24px;
`;

const Arrow = styled.span`
  margin-left: 6px;
  font-size: 12px;
  position: absolute;
  right: 23px;
`;

const CommunitySearchOption = styled.div`
  position: absolute;
  top: 70px;
  left: 0;
  width: 148px;
  background-color: ${({ theme }) => theme.colors[500]};
  box-shadow: 0px 0px 10px 0px rgba(20, 20, 22, 0.64);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 10;
  overflow: hidden;
  text-align: center;
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.B6};
  padding: 16px;

  div {
    padding: 12px 24px;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors[400]};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

const CommunitySearchInput = styled.input`
  width: 720px;
  height: 60px;
  padding: 16px 24px 16px 24px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors[300]};
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.B4};
`;

interface CommunityItemProps {
  CommunityListInfo: CommunityListInfo;
}

const CommunitySearchSelectWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('작성자');

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <CommunitySearchSelect onClick={() => setIsOpen(!isOpen)}>
      <Arrow>{isOpen ? '▲' : '▼'}</Arrow>
      {selectedOption}
      {isOpen && (
        <CommunitySearchOption>
          <div onClick={() => handleOptionClick('작성자')}>작성자</div>
          <div onClick={() => handleOptionClick('옵션1')}>옵션1</div>
          <div onClick={() => handleOptionClick('옵션2')}>옵션2</div>
        </CommunitySearchOption>
      )}
    </CommunitySearchSelect>
  );
};

const RecommendedPostList = ({ CommunityListInfo }: CommunityItemProps) => {
  const [activePage, setActivePage] = useState(1);

  const handlePageClick = (pageNumber: SetStateAction<number>) => {
    setActivePage(pageNumber);
  };
  return (
    <ComuContainer>
      <TitleBlock>
        <PageTitle>음악 추천 게시판</PageTitle>
      </TitleBlock>

      <CommunityList>
        {CommunityListInfo.map((item, index) => (
          <CommunityItem key={index}>
            <CommunityImageWrapper>
              <CommunityImage src={item.img} alt="Community" />
            </CommunityImageWrapper>
            <CommuityContent>
              <CommunityInfo>
                <CommunitySongInfo>{item.songinfo}</CommunitySongInfo>
                <CommunitySongDescription>{item.title}</CommunitySongDescription>
              </CommunityInfo>
              <CommunityAction>
                <CommunityRating>
                  <StarRatingInput value={3} enabled={false} />
                  {/* {[...Array(5)].map((_, index) => {
                    return index < Number(item.rateCount) ? <StarActive key={index} /> : <StarDefalut key={index} />;
                  })} */}
                  <CommunityRatingNumber>{item.reviewCount}</CommunityRatingNumber>
                </CommunityRating>

                <CommunityTagBlock>
                  {item.tag.map((tagItem) => (
                    <CommonTag key={index} name={tagItem.name} type={tagItem.type} />
                  ))}
                </CommunityTagBlock>
              </CommunityAction>
            </CommuityContent>
          </CommunityItem>
        ))}

        <>
          {[1, 2, 3, 4, 5].map((pageNumber) => (
            <CommunityPagenation
              key={pageNumber}
              onClick={() => handlePageClick(pageNumber)}
              isActive={activePage === pageNumber}
            >
              {pageNumber}
            </CommunityPagenation>
          ))}
        </>
      </CommunityList>

      <CommuniySearchBlock>
        <CommunitySearchSelectWrapper />
        <CommunitySearchInput type="text" placeholder="게시글 내용을 입력해 주세요." />
      </CommuniySearchBlock>
    </ComuContainer>
  );
};

export default RecommendedPostList;
