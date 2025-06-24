import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MoreButton } from 'pages/detail/ui/MoreButton';


import { BoardDetail } from 'entities/community/model/types';
import { useDeleteReplyMutation, useMyRepliesQuery } from 'entities/reply/api/reply.queries';
import { DeleteReplyModal } from 'entities/reply/ui/DeleteReplyModal';

import { ROUTES } from 'shared/config/routes';
import { Button, StarRatingInput } from 'shared/ui/';
import { CommonTag } from 'shared/ui/Tag';

import { LikeButton } from './LikeButton';

interface MusicInfoProps extends BoardDetail {
  boardId: number;
}

export const MusicInfo = ({
  boardId,
  musicTitle,
  artist,
  hashtags,
  genre,
  thumbNailLink,
  permitRegister,
  rating,
  likeCount,
  isLike,
}: MusicInfoProps) => {
  const [open, setOpen] = useState(false);
  const { data: existingReply } = useMyRepliesQuery(boardId);
  const deleteReplyMutation = useDeleteReplyMutation(boardId);
  const navigate = useNavigate();

  const hasReview = !!existingReply?.data;

  const menuItem = [
    {
      content: '리뷰 삭제',
      onClick: () => {
        setOpen(true);
      },
    },
  ];

  // 리뷰 삭제 핸들러
  const handleDeleteReview = () => {
    if (!hasReview || deleteReplyMutation.isPending) return;

    deleteReplyMutation.mutate(boardId, {
      onSuccess: async () => {
        window.alert('리뷰가 삭제되었습니다.');
        setOpen(false);
        await navigate(ROUTES.COMMUNITY.COMMUNITY);
      },
    });
  };

  return (
    <>
      <Layout>
        <MusicInfoBox>
          <AdminBlock>
            <AdminConfirm>
              관리자 확인
              <ConfirmAlert isConfirmed={!(permitRegister === 'NON_CHECK')} />
              <ToolTip>관리자 확인이 완료될 시 좋아요가 알고리즘에 반영돼요.</ToolTip>
            </AdminConfirm>
          </AdminBlock>

          <CoverBox>
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
              <StarRatingInput enabled={false} value={Math.round(rating)} /> 
            </RateBlock>
          </TrackDetailsBlock>

          <ButtonBlock>
            <LikeButton
              boardId={boardId}
              isLike={isLike}
              likeCount={likeCount}
            />
            <Button variant="outlined">플레이리스트에 추가</Button>
          </ButtonBlock>

          <TagBlock>
            {genre.map((text) => (
              <CommonTag key={text} type="genre" name={text} />
            ))}
            {hashtags.map((text) => (
              <CommonTag key={text} type="mood" name={text} />
            ))}
          </TagBlock>
        </MusicInfoBox>
      </Layout>
      <DeleteReplyModal
        open={open}
        hasReview={hasReview}
        onClose={() => setOpen(false)}
        onConfirm={() => {
          handleDeleteReview();
        }}
      />
    </>
  );
};

const Layout = styled.div``;

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
  transform: translate(0, -20%);
  padding: 16px 20px 18px 20px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors[400]};
  background: ${({ theme }) => theme.colors[600]};
  box-shadow: 0px 0px 10px 0px rgba(20, 20, 22, 0.64);
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.B6};
  white-space: nowrap;
  pointer-events: none;
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
  white-space: nowrap;
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
