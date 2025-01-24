import styled from '@emotion/styled';

import { LikeMusicList } from 'entities/home/model/types';

import arrow2 from 'shared/assets/image/main/arrow 2.png';

import { LikeMoreItem } from './LikeMoreItem';
import { LikeMusicItem } from './LikeMusicItem';

// 좋아요한 음악 전체영역
const LikeContainer = styled.div`
  width: 1280px;
  height: 252px;
`;

//좋아요한 음악 타이틀
const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const PageTitle = styled.div`
  color: ${({ theme }) => theme.colors.secondary1};
  ${({ theme }) => theme.fonts.wantedSans.T1};
`;

const SubTitle = styled.div`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.T2};
`;

// 장르의 음악 리스트 영역
const LikeMusingBlock = styled.div`
  display: flex;
  gap: 16px;
  width: 1280px;
  height: 208px;
`;

//더보기
const LikeMore = styled.div`
  width: 384px;
  height: 208px;
  background-color: ${({ theme }) => theme.colors[600]};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  overflow-wrap: inherit;
  padding: 8px;
  gap: 8px;
`;

const LikeMoreList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 8px;
  align-items: center;
  width: 100%;
`;

const Arrow = styled.img`
  width: 44px;
  height: 44px;
  justify-self: center; /* Arrow를 가운데 정렬 */
  margin-top: 20px;
  cursor: pointer;
`;

interface LikeMusicListProps {
  LikeMusicList: LikeMusicList;
}

const LikeMusic = ({ LikeMusicList }: LikeMusicListProps) => {
  const limitedLikeMusicList = LikeMusicList.slice(0, 4);
  const limitedLikeMusicList2 = LikeMusicList.slice(4, 7);
  const limitedLikeMusicList3 = LikeMusicList.slice(7, 10);

  return (
    <LikeContainer>
      <TitleBlock>
        <PageTitle>좋아요</PageTitle>
        <SubTitle>한 음악</SubTitle>
      </TitleBlock>

      <LikeMusingBlock>
        {limitedLikeMusicList.map((item, index) => (
          <LikeMusicItem key={index} item={item} />
        ))}

        <LikeMore>
          <LikeMoreList>
            {limitedLikeMusicList2.map((item, index) => (
              <LikeMoreItem key={index} item={item} />
            ))}
          </LikeMoreList>

          <LikeMoreList>
            {limitedLikeMusicList3.map((item, index) => (
              <LikeMoreItem key={index} item={item} />
            ))}
            <Arrow src={arrow2}></Arrow>
          </LikeMoreList>
        </LikeMore>
      </LikeMusingBlock>
    </LikeContainer>
  );
};

export default LikeMusic;
