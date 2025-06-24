import styled from '@emotion/styled';
import moment from 'moment';
import { SetStateAction, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

moment.locale('ko');

import { useGetReviewQuery } from 'features/memberInfo/lib/useGetReviewQuery';
import { useGetReviewSearchQuery } from 'features/memberInfo/lib/useGetReviewSearchQuery';

import { ContentItem } from 'entities/memberInfo/model/types';

import { ROUTES } from 'shared/config/routes';
import { commonStyles } from 'shared/styles/common';
import { Pagination } from 'shared/ui';
import { Nodata } from 'shared/ui';
import { Filter } from 'shared/ui/Input/Filter';
import { StarRatingInput } from 'shared/ui/Input/StarRatingInput';

interface CommunitySearchSelectWrapperProps {
  keyWord: string;
  onSearch: (data: { content: ContentItem[] }) => void;
}

const CommunitySearchSelectWrapper = ({ keyWord, onSearch }: CommunitySearchSelectWrapperProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState('내용');
  const [selectedOption, setSelectedOption] = useState('content');
  const { data: searchData } = useGetReviewSearchQuery(1, 'DESC', selectedOption, keyWord, {
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
          <div onClick={() => handleOptionClick('내용', 'content')}>내용</div>
          <div onClick={() => handleOptionClick('노래명', 'musicName')}>노래명</div>
          <div onClick={() => handleOptionClick('가수명', 'artist')}>가수명</div>
        </CommunitySearchOption>
      )}
    </CommunitySearchSelect>
  );
};

export const MemberReview = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState(0);
  const [sortOrder, setSortOrder] = useState('DESC');
  const [keyWord, setKeyWord] = useState<string>('');
  const { data } = useGetReviewQuery(activePage, sortOrder);
  const [reviewList, setReviewList] = useState<ContentItem[]>([]);

  useEffect(() => {
    if (data?.content) {
      setReviewList(data.content);
    }
  }, [data]);

  const handlePageClick = (pageNumber: SetStateAction<number>) => {
    setActivePage(pageNumber);
    setKeyWord(''); // 페이지 변경 시 검색어 초기화
  };

  const handleSearch = (searchResults: { content: ContentItem[] }) => {
    if (searchResults?.content) {
      setReviewList(searchResults.content);
    }
  };

  return (
    <MemberContainer>
      <TitleBlock>
        <PageTitle>나의 별점 및 리뷰</PageTitle>
      </TitleBlock>

      <HeaderBlock>
        <HeaderText>별점</HeaderText>
        <HeaderText>리뷰 내용</HeaderText>
        <Filter
          placeholder="최신순"
          options={[
            {
              label: '최신순',
              value: 'DESC',
            },
            {
              label: '오래된 순',
              value: 'ASC',
            },
          ]}
          onChange={(option) => {
            setSortOrder(option.value);
          }}
          defaultValue={{
            label: '최신순',
            value: 'DESC',
          }}
        />
      </HeaderBlock>

      <CommunityBlock>
        <CommunityListBlock>
          {reviewList.length === 0 ? (
            <Nodata Comment={'나의 별점 및 리뷰가 없어요.'} />
          ) : (
            reviewList.map((item: ContentItem) => (
              <div key={item.id}>
                <CommunityListWrapper
                  onClick={async () => await navigate(ROUTES.DETAIL.replace(':id', item.id.toString()))}
                >
                  <CommunityList>
                    <StarRatingWrapper>
                      <StarRatingInput value={item.starScore} enabled={false} />
                    </StarRatingWrapper>
                    <ListContent>
                      <ListImg src={item.musicDto.thumbNailLink} />
                      <ContentInfo>
                        <ContentsSongName>{item.content}</ContentsSongName>
                        <ContentsSongDescription>
                          {item.musicDto.artists[0]?.name} · {item.musicDto.musicName}
                        </ContentsSongDescription>
                      </ContentInfo>
                    </ListContent>
                    <ActivityInfo>
                      <ActivityStatus>{moment(item.createdAt).format('YYYY-MM-DD')}</ActivityStatus>
                    </ActivityInfo>
                  </CommunityList>
                </CommunityListWrapper>
              </div>
            ))
          )}
        </CommunityListBlock>
      </CommunityBlock>

      <CommunityPagenationWrapper>
        <Pagination totalPages={data?.totalPages} activePage={activePage} onClick={handlePageClick} />
      </CommunityPagenationWrapper>
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
    </MemberContainer>
  );
};

const MemberContainer = styled.div`
  width: 1024px;
  height: 1500px;
  background-color: ${({ theme }) => theme.colors[700]};
  position: relative;
`;

const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 80px;
  padding: 44px 52px;
`;

const HeaderBlock = styled.div`
  width: 100%;
  height: 60px;
  padding: 16px 52px 16px 52px;
  border-top: 1px solid ${({ theme }) => theme.colors[400]};
  border-bottom: 1px solid ${({ theme }) => theme.colors[400]};
  display: flex;
  justify-content: flex-start; /* 시작점 기준 정렬 */
`;

const HeaderText = styled.div`
  color: ${({ theme }) => theme.colors[100]};
  ${({ theme }) => theme.fonts.wantedSans.B4};

  &:nth-child(1) {
    margin-right: 105px;
  }

  &:nth-child(2) {
    margin-right: auto;
  }
`;

const PageTitle = styled.div`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.T2};
  margin-right: 16px;
`;

const CommunityBlock = styled.div`
  display: flex;
  gap: 24px;
  border-radius: 12px;
  width: 1024px;
  height: 100%;
`;

const CommunityListBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
`;

const CommunityListWrapper = styled.div`
  width: 100%;
  height: 112px;
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
  width: 1024px;
  height: 112px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors[400]};
  border-radius: 1px;
  padding: 24px 52px 24px 52px;
`;

const ListImg = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 20px;
  object-fit: cover;
`;

const ListContent = styled.div`
  width: 820px;
  height: 64px;
  display: flex;
  align-items: center;
  margin-left: 32px;
`;

const ContentInfo = styled.div`
  /* width: 160px; */
  height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentsSongName = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B4};
  color: ${({ theme }) => theme.colors[100]};
  /* ${commonStyles.limitText}; */
`;

const ContentsSongDescription = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.C1};
  color: ${({ theme }) => theme.colors[200]};
  /* max-width: 396px; */
  /* ${commonStyles.limitText}; */
`;

const StarRatingWrapper = styled.div`
  width: 148px;
  height: 28px;
`;

const ActivityInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  height: 52px;
  margin-left: 16px;
`;

const ActivityStatus = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B6};
  color: ${({ theme }) => theme.colors[200]};
  text-align: right;
`;

const CommunityPagenationWrapper = styled.div`
  position: absolute;
  left: 452px;
  bottom: 40px;
  display: flex;
`;

// const CommunityPagenation = styled.div<{ isActive: boolean }>`
//   color: ${({ theme, isActive }) => (isActive ? theme.colors[100] : theme.colors[200])};
//   ${({ theme }) => theme.fonts.wantedSans.B5};
//   cursor: pointer;
//   width: 24px;
//   height: 28px;
// `;

const CommuniySearchBlock = styled.div`
  width: 888px;
  height: 60px;
  display: flex;
  gap: 20px;
  position: absolute;
  bottom: -100px;
  left: 68px;
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
