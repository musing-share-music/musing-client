import styled from '@emotion/styled';
import moment from 'moment';
import { Key, SetStateAction, useEffect, useState } from 'react';

moment.locale('ko');

import { useGetCommunityQuery } from 'features/memberInfo/lib/useGetCommunityQuery';
import { useGetCommunitySearchQuery } from 'features/memberInfo/lib/useGetCommunitySearchQuery';

import { BoardListItem } from 'entities/memberInfo/model/types';

import { commonStyles } from 'shared/styles/common';
import { Pagination } from 'shared/ui';
import { Nodata } from 'shared/ui';
import { Filter } from 'shared/ui/Input/Filter';

interface CommunitySearchSelectWrapperProps {
  keyWord: string;
  onSearch: (data: { content: BoardListItem[] }) => void;
}

const CommunitySearchSelectWrapper = ({ keyWord, onSearch }: CommunitySearchSelectWrapperProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState('내용');
  const [selectedOption, setSelectedOption] = useState('content');
  const { data: searchData } = useGetCommunitySearchQuery(1, 'DESC', selectedOption, keyWord, {
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

export const MemberCommunity = () => {
  const [activePage, setActivePage] = useState(0);
  const [sortOrder, setSortOrder] = useState('DESC');
  const [keyWord, setKeyWord] = useState<string>('');
  const { data } = useGetCommunityQuery(activePage, sortOrder);
  const [communityList, setCommunityList] = useState<BoardListItem[]>([]);

  useEffect(() => {
    if (data?.content) {
      setCommunityList(data.content);
    }
  }, [data]);

  const handlePageClick = (pageNumber: SetStateAction<number>) => {
    setActivePage(pageNumber);
    setKeyWord(''); // 페이지 변경 시 검색어 초기화
  };

  const handleSearch = (searchResults: { content: BoardListItem[] }) => {
    if (searchResults?.content) {
      setCommunityList(searchResults.content);
    }
  };

  return (
    <MemberContainer>
      <TitleBlock>
        <PageTitle>나의 음악 추천 게시글</PageTitle>
      </TitleBlock>

      <HeaderBlock>
        <HeaderText>추천곡</HeaderText>
        <HeaderText>게시글 제목</HeaderText>
        <Filter
          placeholder="전체"
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
        />
      </HeaderBlock>

      <CommunityBlock>
        <CommunityListBlock>
          {communityList.length === 0 ? (
            <Nodata Comment={'나의 음악 추천 게시글이 없어요.'} />
          ) : (
            communityList.map((item: BoardListItem, idx: Key | null | undefined) => (
              <div key={idx}>
                <CommunityListWrapper>
                  <CommunityList>
                    <ListImg src={item.thumbNailLink} />
                    <ListContent>
                      <ContentInfo>
                        <ContentsSongName>{item.musicName}</ContentsSongName>
                        <ContentsSongDescription>{item.artists[0]?.name}</ContentsSongDescription>
                      </ContentInfo>

                      <ContentTitleBlock>
                        <ContentTitle>{item.title}</ContentTitle>
                      </ContentTitleBlock>

                      <ActivityInfo>
                        <ActivityStatus>{moment(item.createAt).format('YYYY-MM-DD')}</ActivityStatus>
                      </ActivityInfo>
                    </ListContent>
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
    margin-left: 10px;
    margin-right: 198px;
  }

  &:nth-child(2) {
    margin-right: 405px;
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
  justify-content: center;
  align-items: center;
`;

const ContentInfo = styled.div`
  width: 160px;
  height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentsSongName = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B4};
  color: ${({ theme }) => theme.colors[100]};
  ${commonStyles.limitText};
`;

const ContentsSongDescription = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.C1};
  color: ${({ theme }) => theme.colors[200]};
  max-width: 396px;
  ${commonStyles.limitText};
`;

const ContentTitleBlock = styled.div`
  width: 708px;
  height: 28px;
  margin-left: 16px;
`;

const ContentTitle = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B3};
  color: ${({ theme }) => theme.colors[100]};
  ${commonStyles.limitText};

  &::before {
    content: '·';
    margin-right: 4px;
  }
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
