import styled from '@emotion/styled';
import { useState } from 'react';

import StarActive from 'shared/assets/image/icons/icon-star-active.svg?react';
import StarDefalut from 'shared/assets/image/icons/icon-star.svg?react';
import arrow2 from 'shared/assets/image/main/arrow 2.png';
import image1 from 'shared/assets/image/main/image1.png';

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

const PageButton = styled.button`
  width: 132px;
  height: 64px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary2};
  color: ${({ theme }) => theme.colors.primary2};
  ${({ theme }) => theme.fonts.wantedSans.B3};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors[400]};
  }
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

const RecommendedPost = () => {
  const [stars, setStars] = useState([true, true, true, true, false]); // 초기 상태 설정

  const toggleStar = (index: number) => {
    const updatedStars = stars.map((isActive, i) => (i === index ? !isActive : isActive));
    setStars(updatedStars);
  };

  return (
    <ComuContainer>
      <TitleBlock>
        <PageTitle>이런 게시글은 어때요?</PageTitle>
        <PageButton>글쓰기</PageButton>
      </TitleBlock>

      <PostBlock>
        <PostCard>
          <PostImage src={image1}></PostImage>
          <PostContent>
            <PostInfo>
              <PostSongInfo>Love You On Christmas · 백예린</PostSongInfo>
              <PostSongTitle>크리스마스에 어떤 곡을 즐겨 들으시나요?</PostSongTitle>
              <PostSongDescription>
                크리스마스를 앞두고 좋아하던 캐롤을 꺼내 듣고 있어요. 그 중에서도 이 곡을 가장 많이 듣게 되는 것 같아요.
              </PostSongDescription>
            </PostInfo>
            <PostAction>
              <PostRateArea>
                {stars.map((isActive, index) => (
                  <span key={index} onClick={() => toggleStar(index)}>
                    {isActive ? <StarActive /> : <StarDefalut />}
                  </span>
                ))}
              </PostRateArea>
              <PostArrow src={arrow2}></PostArrow>
            </PostAction>
          </PostContent>
        </PostCard>

        <PostComuList>
          <PostComuItem>
            <PostComuImage src={image1}></PostComuImage>
            <PostComuSongInfo>Highway Tune · Greta Van Fleet</PostComuSongInfo>
            <PostComuSongTitle>글 제목</PostComuSongTitle>
            <PostComuDate>1분 전</PostComuDate>
          </PostComuItem>

          <PostComuItem>
            <PostComuImage src={image1}></PostComuImage>
            <PostComuSongInfo>Highway Tune · Greta Van Fleet</PostComuSongInfo>
            <PostComuSongTitle>글 제목</PostComuSongTitle>
            <PostComuDate>5시간 전</PostComuDate>
          </PostComuItem>
        </PostComuList>
      </PostBlock>
    </ComuContainer>
  );
};

export default RecommendedPost;
