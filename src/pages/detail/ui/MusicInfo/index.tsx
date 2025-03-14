import styled from '@emotion/styled';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AnchorButton } from 'pages/detail/ui/AnchorButton';
import { MoreButton } from 'pages/detail/ui/MoreButton';

import { DeleteReviewModal } from 'widgets/ui/PlayList/DeleteReviewModal';

import { useDeletePostMutation } from 'features/community/deletePost/lib/useDeletePostMutation';

import { BoardDetail } from 'entities/community/model/types';
import { useGetGenre } from 'entities/genre/api/useGetGenre';
import { useGetMood } from 'entities/mood/api/useGetMood';

import { ROUTES } from 'shared/config/routes';
import { Button, StarRatingInput } from 'shared/ui/';
import { CommonTag } from 'shared/ui/Tag';

import { LikeButton } from './LikeButton';

interface MusicInfoProps extends BoardDetail {
  boardId: number;
}

export const MusicInfo = ({ boardId, musicTitle, artist, hashtags, genre, thumbNailLink }: MusicInfoProps) => {
  const [open, setOpen] = useState(false);
  const deletePostMutation = useDeletePostMutation();
  const navigate = useNavigate();
  const { data: moodData } = useGetMood();
  const { data: genreData } = useGetGenre();

  const isConfirmed = true; // 관리자 확인 여부
  const genreText: string = useMemo(() => {
    const data = genreData?.find(({ id }) => id === genre);
    return data?.genreName || '';
  }, [genre, genreData]);
  const moodText: string[] = useMemo(
    () =>
      hashtags
        .map((tagId) => moodData?.find(({ id }) => id === Number(tagId))?.moodName || '')
        .filter((value) => !!value),
    [hashtags, moodData],
  );

  const menuItem = [
    {
      content: '리뷰 삭제',
      onClick: () => {
        setOpen(true);
      },
    },
  ];

  // TODO: 상세 조회 api 연동 후 기능 확인
  // 리뷰 삭제 핸들러
  const handleDeleteReview = () => {
    if (deletePostMutation.isPending) return;

    deletePostMutation.mutate(
      { boardId: boardId },
      {
        onSuccess: async () => {
          window.alert('리뷰가 삭제되었습니다.');
          setOpen(false);
          await navigate(ROUTES.COMMUNITY.COMMUNITY);
        },
      },
    );
  };

  return (
    <>
      <Layout>
        <MusicInfoBox>
          <AdminBlock>
            <AdminConfirm>
              관리자 확인
              <ConfirmAlert isConfirmed={isConfirmed} />
              <ToolTip>관리자 확인이 완료될 시 좋아요가 알고리즘에 반영돼요.</ToolTip>
            </AdminConfirm>
          </AdminBlock>

          <CoverBox>
            {/* TODO: 썸네일 defaul 이미지 */}
            <CoverImg src={thumbNailLink} />
          </CoverBox>

          <TrackDetailsBlock>
            <TrackDetails>
              <Box>
                <Title>{musicTitle}</Title>
                <Artist>{artist}</Artist>
              </Box>
              <MoreButton menuItem={menuItem} />
            </TrackDetails>
            <RateBlock>
              <StarRatingInput enabled={false} value={3} />
            </RateBlock>
          </TrackDetailsBlock>

          <ButtonBlock>
            <LikeButton />
            <Button variant="outlined">플레이리스트에 추가</Button>
          </ButtonBlock>

          <TagBlock>
            <CommonTag type="genre" name={genreText} />
            {moodText.map((val) => (
              <CommonTag key={val} type="genre" name={val} />
            ))}
          </TagBlock>
        </MusicInfoBox>

        <AnchorButton />
      </Layout>
      <DeleteReviewModal
        open={open}
        onClose={() => setOpen(false)}
        onConfirm={() => {
          handleDeleteReview();
        }}
      />
    </>
  );
};

const Layout = styled.div`
  position: sticky;
  top: 24px;
`;

const MusicInfoBox = styled.div`
  display: flex;
  width: 100%;
  padding: 24px 24px 26px;
  flex-direction: column;
  gap: 20px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors[600]};
  background: ${({ theme }) => theme.colors[700]};
`;

const AdminBlock = styled.div``;

const ToolTip = styled.div`
  opacity: 0;
  position: absolute;
  left: 0;
  transform: translate(0, -100%);
  padding: 16px 20px 18px 20px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors[400]};
  background: ${({ theme }) => theme.colors[600]};
  box-shadow: 0px 0px 10px 0px rgba(20, 20, 22, 0.64);
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.B6};
  white-space: nowrap;
`;

const AdminConfirm = styled.div`
  position: relative;
  display: flex;
  width: 120px;
  padding: 8px 8px 9px 14px;
  justify-content: center;
  align-items: center;
  gap: 7px;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors[600]};
  color: ${({ theme }) => theme.colors[100]};
  ${({ theme }) => theme.fonts.wantedSans.C1};

  &:hover ${ToolTip} {
    opacity: 1;
  }
`;

const ConfirmAlert = styled.div<{ isConfirmed: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: ${({ theme, isConfirmed }) => (isConfirmed ? theme.colors.primary1 : theme.colors[300])};
`;

const CoverBox = styled.div`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 6px;
  overflow: hidden;
`;

const CoverImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TrackDetailsBlock = styled.div``;

const TrackDetails = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Title = styled.h1`
  margin: 0;
  ${({ theme }) => theme.fonts.wantedSans.B2};
  color: ${({ theme }) => theme.colors.white};
`;

const Artist = styled.p`
  margin: 0;
  ${({ theme }) => theme.fonts.wantedSans.B5};
  color: ${({ theme }) => theme.colors[200]};
`;

const RateBlock = styled.div``;

const ButtonBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const TagBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  flex-wrap: wrap;
`;
