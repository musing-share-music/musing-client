import styled from '@emotion/styled';
import moment from 'moment';
moment.locale('ko');

import { recentBoard } from 'entities/home/model/types';

import { commonStyles } from 'shared/styles/common';
import { StarRatingInput } from 'shared/ui/Input/StarRatingInput';

interface recentBoardProps {
  recentBoard: recentBoard;
}

export const MemberReviewList = ({ recentBoard }: recentBoardProps) => {
  return (
    <MemberContainer>
      <TitleBlock>
        <PageTitle>나의 별점 및 리뷰</PageTitle>
        <MoreTitle>더보기</MoreTitle>
      </TitleBlock>

      <CommunityBlock>
        <CommunityListBlock>
          {recentBoard.map((item) => {
            return (
              <div key={item.id}>
                <CommunityListWrapper>
                  <CommunityList>
                    <StarRatingWrapper>
                      <StarRatingInput value={5} enabled={false} />
                    </StarRatingWrapper>
                    <ListContent>
                      <ListImg src={item.thumbNailLink} alt={item.title} />
                      <ContentInfo>
                        <ContentsSongName>{item.title}</ContentsSongName>
                        <ContentsSongDescription>{item.musicName}</ContentsSongDescription>
                      </ContentInfo>
                    </ListContent>
                    <ActivityInfo>
                      <ActivityStatus>{moment(item.createdAt).format('YYYY-MM-DD')}</ActivityStatus>
                    </ActivityInfo>
                  </CommunityList>
                </CommunityListWrapper>
              </div>
            );
          })}
        </CommunityListBlock>
      </CommunityBlock>
    </MemberContainer>
  );
};

const MemberContainer = styled.div`
  width: 1200px;
`;

const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  margin-top: 80px;
`;

const PageTitle = styled.div`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.T2};
  margin-right: 16px;
`;

const MoreTitle = styled.div`
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.B5};
`;

const CommunityBlock = styled.div`
  display: flex;
  gap: 24px;
  border-radius: 12px;
  /* padding: 20px; */
  width: 1200px;
  background-color: ${({ theme }) => theme.colors[600]};
`;

const CommunityListBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors[500]};
  padding: 24px;
  border-radius: 1px;
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
  width: 1160px;
  height: 112px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors[400]};
  border-radius: 1px;
  padding: 24px;
`;

const StarRatingWrapper = styled.div`
  width: 148px;
  height: 28px;
`;

const ListImg = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 20px;
`;

const ListContent = styled.div`
  width: 968px;
  height: 64px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;

const ContentInfo = styled.div`
  width: 234px;
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

const ActivityInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  width: 120px;
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
