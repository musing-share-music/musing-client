import styled from '@emotion/styled';
import moment from 'moment';
moment.locale('ko');
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BoardPopUpDto } from 'entities/community/model/types';

import gradient from 'shared/assets/image/community/hover-gradient.png';
import arrow2 from 'shared/assets/image/main/arrow 2.png';
import { ROUTES } from 'shared/config/routes';
import { theme } from 'shared/styles/theme';
import { Button } from 'shared/ui/';
import { StarRatingInput } from 'shared/ui/Input/StarRatingInput';

interface BoardPopUpDtoProps {
  boardPopUpDto: BoardPopUpDto;
}

const RecommendedPost = ({ boardPopUpDto }: BoardPopUpDtoProps) => {
  const recommendBoardFirstDto = boardPopUpDto.recommendBoardFirstDto;
  const [recommendBoardListDto] = useState(boardPopUpDto.recommendBoardListDto);
  const navigate = useNavigate();

  return (
    <ComuContainer>
      <TitleBlock>
        <PageTitle>이런 게시글은 어때요?</PageTitle>
        <Button variant="primaryOutline" width={132} onClick={async () => await navigate(`${ROUTES.CREATE}`)}>
          글쓰기
        </Button>
      </TitleBlock>

      <PostBlock>
        <PostCard>
          <PostImage src={recommendBoardFirstDto.thumbNailLink}></PostImage>
          <PostContent>
            <PostInfo>
              <PostSongInfo>
                {recommendBoardFirstDto.musicName} · {recommendBoardFirstDto.artists[0].name}
              </PostSongInfo>
              <PostSongTitle>{recommendBoardFirstDto.title}</PostSongTitle>
              <PostSongDescription>{recommendBoardFirstDto.content}</PostSongDescription>
            </PostInfo>
            <PostAction>
              <PostRateArea>
                <StarRatingInput value={3} color={theme.colors.white} enabled={false} />
              </PostRateArea>
              <PostArrowWrapper>
                <PostArrow src={arrow2}></PostArrow>
                <PostArrowHover src={gradient}></PostArrowHover>
              </PostArrowWrapper>
            </PostAction>
          </PostContent>
        </PostCard>

        <PostComuList>
          {recommendBoardListDto.map((item, index) => {
            const itemDate = moment(item.createAt);
            const now = moment();

            const diffMinutes = now.diff(itemDate, 'minutes');
            const diffHours = now.diff(itemDate, 'hours');
            const diffDays = now.diff(itemDate, 'days');
            const diffWeeks = now.diff(itemDate, 'weeks');
            const diffYears = now.diff(itemDate, 'years');

            let formattedDate;
            if (diffMinutes < 60) {
              formattedDate = `${diffMinutes}분 전`;
            } else if (diffHours < 24) {
              formattedDate = `${diffHours}시간 전`;
            } else if (diffDays < 7) {
              formattedDate = `${diffDays}일 전`;
            } else if (diffWeeks < 4) {
              formattedDate = `${diffWeeks}주 전`;
            } else if (diffYears < 1) {
              const diffMonths = now.diff(itemDate, 'months');
              formattedDate = `${diffMonths}개월 전`;
            } else {
              formattedDate = `${diffYears}년 전`;
            }

            return (
              <PostComuItem key={index}>
                <PostComuImage src={item.thumbNailLink} />
                <PostComuSongInfo>
                  {item.musicName} · {item.artists[0]?.name}
                </PostComuSongInfo>
                <PostComuSongTitle>{item.title}</PostComuSongTitle>
                <PostComuDate>{formattedDate}</PostComuDate>
              </PostComuItem>
            );
          })}
        </PostComuList>
      </PostBlock>
    </ComuContainer>
  );
};

export default RecommendedPost;

const ComuContainer = styled.div`
  width: 1280px;
  height: 324px;
`;

const TitleBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const PageTitle = styled.div`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.T2};
  vertical-align: bottom;
`;

const PostBlock = styled.div`
  width: 100%;
  height: 240px;
  display: flex;
  margin-top: 20px;
  gap: 16px;
`;

const PostCard = styled.div`
  display: flex;
  width: 720px;
  height: 240px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors[500]};
  background-color: ${({ theme }) => theme.colors[600]};
`;

const PostImage = styled.img`
  width: 240px;
  height: 240px;
  object-fit: cover;
`;

const PostContent = styled.div`
  width: 480px;
  height: 240px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const PostInfo = styled.div`
  position: absolute;
  top: 28px;
  left: 32px;
  width: 418px;
  height: 128px;
`;

const PostSongInfo = styled.div`
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.B6};
`;

const PostSongTitle = styled.div`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.B2};
  margin-top: 16px;
`;

const PostSongDescription = styled.div`
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.B4};
  margin-top: 16px;
  width: 324px;
  height: 56px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PostAction = styled.div`
  position: absolute;
  bottom: 32px;
  left: 32px;
  width: 418px;
  height: 44px;
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
`;

const PostRateArea = styled.div`
  margin-top: 26px;
  width: 108px;
  height: 24px;
  display: flex;
  gap: 2px;
`;

const PostArrowHover = styled.img`
  position: absolute;
  bottom: -30px;
  right: -29px;
  display: none;
`;

const PostArrowWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 44px;
  cursor: pointer;

  &:hover ${PostArrowHover} {
    display: block;
  }
`;

const PostArrow = styled.img`
  width: 44px;
  height: 44px;
  cursor: pointer;
`;

const PostComuList = styled.div`
  width: 544px;
  height: 240px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors[600]};
`;

const PostComuItem = styled.div`
  width: 100%;
  height: 50%;
  border: 1px solid ${({ theme }) => theme.colors[500]};
  position: relative;
`;

const PostComuImage = styled.img`
  position: absolute;
  top: 28px;
  left: 32px;
  width: 64px;
  height: 64px;
  border-radius: 4px;
  object-fit: cover;
`;

const PostComuSongInfo = styled.div`
  position: absolute;
  top: 34px;
  left: 112px;
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.B6};
`;

const PostComuSongTitle = styled.div`
  position: absolute;
  top: 58px;
  left: 112px;
  color: ${({ theme }) => theme.colors[100]};
  ${({ theme }) => theme.fonts.wantedSans.B3};
`;

const PostComuDate = styled.div`
  position: absolute;
  bottom: 46px;
  right: 45px;
  color: ${({ theme }) => theme.colors.primary2};
  ${({ theme }) => theme.fonts.wantedSans.B4};
`;
