import styled from '@emotion/styled';
import { SetStateAction, useEffect, useState } from 'react';

import { useGetPageList, useGetSearchList } from 'entities/community/api';
import { boardDtos, boardDtosItem } from 'entities/community/model/types';

import { commonStyles } from 'shared/styles/common';
import { StarRatingInput } from 'shared/ui/Input/StarRatingInput';
import { Spinner } from 'shared/ui/Spinner';
import { CommonTag } from 'shared/ui/Tag';

interface boardDtosProps {
  boardDtos: boardDtos;
}

interface CommunitySearchSelectWrapperProps {
  keyWord: string;
  onSearch: (data: { data: { content: boardDtosItem[] } }) => void;
}

const CommunitySearchSelectWrapper = ({ keyWord, onSearch }: CommunitySearchSelectWrapperProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState('제목');
  const [selectedOption, setSelectedOption] = useState('title');
  const { data: searchData } = useGetSearchList(selectedOption, 1, keyWord, {
    enabled: enabled,
  });

  useEffect(() => {
    if (keyWord) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  }, [keyWord]);

  useEffect(() => {
    if (searchData) {
      onSearch(searchData);
    }
  }, [searchData, onSearch]);

  const handleOptionClick = (title: string, option: string) => {
    setSelectedTitle(title);
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <CommunitySearchSelect onClick={() => setIsOpen(!isOpen)}>
      <Arrow>{isOpen ? '▲' : '▼'}</Arrow>
      {selectedTitle}
      {isOpen && (
        <CommunitySearchOption>
          <div onClick={() => handleOptionClick('제목', 'title')}>제목</div>
          <div onClick={() => handleOptionClick('작성자', 'username')}>작성자</div>
          <div onClick={() => handleOptionClick('가수명', 'artist')}>가수명</div>
          <div onClick={() => handleOptionClick('장르명', 'gerne')}>장르명</div>
          <div onClick={() => handleOptionClick('분위기명', 'mood')}>분위기명</div>
        </CommunitySearchOption>
      )}
    </CommunitySearchSelect>
  );
};

type GetPageListResponse = {
  data: boardDtos;
};

const RecommendedPostList = ({ boardDtos }: boardDtosProps) => {
  const [activePage, setActivePage] = useState(1);
  const [enabled, setEnabled] = useState(false);
  const [keyWord, setKeyWord] = useState<string>('');
  const [musingList, setMusingList] = useState(boardDtos.content);
  const { data: pageData, isLoading: pageLoading } = useGetPageList(activePage, {
    enabled: enabled,
  });
  useEffect(() => {
    // 초기 렌더링 시에는 실행하지 않음
    if (activePage !== 1) {
      setEnabled(true);
    }
  }, [activePage]);

  useEffect(() => {
    if (!keyWord && !pageData) {
      setMusingList(boardDtos.content);
    } else if (pageData) {
      setMusingList((pageData as GetPageListResponse)?.data?.content);
    }
  }, [boardDtos.content, pageData, keyWord]);

  const handlePageClick = (pageNumber: SetStateAction<number>) => {
    setActivePage(pageNumber);
    setKeyWord(''); // Reset search when changing pages
  };

  const handleSearch = (searchResults: { data: { content: SetStateAction<boardDtosItem[]> } }) => {
    if (searchResults?.data?.content) {
      setMusingList(searchResults.data.content);
    }
  };

  return pageLoading ? (
    <Spinner isLoading={pageLoading}></Spinner>
  ) : (
    <ComuContainer>
      <TitleBlock>
        <PageTitle>음악 추천 게시판</PageTitle>
      </TitleBlock>

      <CommunityList>
        {musingList?.map((item, index) => (
          <CommunityItem key={index}>
            <CommunityImageWrapper>
              <CommunityImage src={item.thumbNailLink} alt="Community" />
            </CommunityImageWrapper>
            <CommuityContent>
              <CommunityInfo>
                <CommunitySongInfo>
                  {item.musicName} · {item.artists[0].name}
                </CommunitySongInfo>
                <CommunitySongDescription>{item.title}</CommunitySongDescription>
              </CommunityInfo>
              <CommunityAction>
                <CommunityRating>
                  <StarRatingInput value={item.rating} enabled={false} />
                  <CommunityRatingNumber>{item.replyCount}</CommunityRatingNumber>
                </CommunityRating>

                <CommunityTagBlock>
                  {item.genreList.map((tagItem) => (
                    <CommonTag key={index} name={tagItem.genreName} type="genre" />
                  ))}

                  {item.moodList.map((tagItem) => (
                    <CommonTag key={index} name={tagItem.moodName} type="mood" />
                  ))}
                </CommunityTagBlock>
              </CommunityAction>
            </CommuityContent>
          </CommunityItem>
        ))}

        <CommunityPagenationWrapper isActive={false}>
          {Array.from({ length: boardDtos.totalPages }, (_, i) => i + 1).map((pageNumber) => (
            <CommunityPagenation
              key={pageNumber}
              onClick={() => handlePageClick(pageNumber)}
              isActive={activePage === pageNumber}
            >
              {pageNumber}
            </CommunityPagenation>
          ))}
        </CommunityPagenationWrapper>
      </CommunityList>

      <CommuniySearchBlock>
        <CommunitySearchSelectWrapper keyWord={keyWord} onSearch={handleSearch} />
        <CommunitySearchInput
          type="text"
          placeholder="게시글 내용을 입력해 주세요."
          onChange={(e) => {
            setKeyWord(e.target.value);
          }}
        />
      </CommuniySearchBlock>
    </ComuContainer>
  );
};

export default RecommendedPostList;

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
  gap: 16px;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors[700]};
  border-radius: 12px;
  position: relative;
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
  ${commonStyles.limitText};
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
  width: 100%;
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
  width: 100%;
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

const CommunityPagenationWrapper = styled.div<{ isActive: boolean }>`
  display: flex;
  gap: 12px;
  position: absolute;
  bottom: 40px;
  left: 580px;
`;

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
