import styled from '@emotion/styled';
import { Key, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetGenreQuery } from 'features/home/lib/useGetGenreQuery';

import { GenreMusics, GenreMusicsItem, LikeGenre, LikeGenreItem } from 'entities/home/model/types';

// import Arrowdown from 'shared/assets/image/icons/icon-arrowdown.svg?react';
import { ROUTES } from 'shared/config/routes';
import { useUserInfoStore } from 'shared/store/userInfo';
import { Nodata } from 'shared/ui';
import { DownArrowButton } from 'shared/ui/';
import { ErrorModal } from 'shared/ui/Modal';
import { AddPlayListModal } from 'shared/ui/Modal/PlayListModal/AddPlayList';
import { CreatePlayListModal } from 'shared/ui/Modal/PlayListModal/CreatePlayList';
import { PersistPlayListModal } from 'shared/ui/Modal/PlayListModal/PersistPlayList';

import { GenreMusicItem } from './GenreMusicItem';

interface genreMusicsProps {
  genreMusics: GenreMusics;
  likeGenre: LikeGenre;
}

const GenreMusic = ({ likeGenre }: genreMusicsProps) => {
  const navigate = useNavigate();

  const filterLikeGenre = Array.from(new Map(likeGenre.map((item) => [item.id, item])).values());

  const [activeCtgId, setActiveCtgId] = useState<number>(filterLikeGenre[0].id);
  const [activeCtgName, setActiveCtgName] = useState<string>(filterLikeGenre[0].genreName);

  const [modalOpen, setModalOpen] = useState(false);

  const { data } = useGetGenreQuery(activeCtgName);

  const CategoryClick = (Category: LikeGenreItem) => {
    setActiveCtgId(Category.id);
    setActiveCtgName(Category.genreName);
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const [isCreateOpen, setCreateOpen] = useState(false);
  const [isPersistOpen, setPersistOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState<GenreMusicsItem | null>(null);

  const { isLogin } = useUserInfoStore();

  return (
    <GenreContainer>
      <PreferTagWrapper>
        {filterLikeGenre.map((item, index) => (
          <PreferTag key={index} active={activeCtgId === item.id} onClick={() => CategoryClick(item)}>
            {item.genreName}
          </PreferTag>
        ))}
        <DownArrowButton backgroundColor={500} hoverBackgroundColor={300} iconColor="primary1Hover1" disabled={true} />
      </PreferTagWrapper>
      <TitleBlock>
        <PageTitle>{activeCtgName}</PageTitle>
        <SubTitle>장르의 음악</SubTitle>
      </TitleBlock>
      <GenreMusingBlock>
        {data?.length === 0 ? (
          <Nodata Comment={`아직 ${activeCtgName} 장르의 음악이 없어요.`} />
        ) : (
          <>
            {data?.slice(0, 4).map((item: GenreMusicsItem, index: Key | null | undefined) => (
              <GenreMusicItem
                key={index}
                item={item}
                onAddPlaylistClick={() => {
                  if (isLogin()) {
                    setSelectedData(item);
                    openModal();
                  } else {
                    setErrorModalOpen(true);
                  }
                }}
              />
            ))}
            <GenreMore>
              <TitleBlock
                className="more"
                onClick={async () =>
                  await navigate(ROUTES.COMMUNITY.COMMUNITY, {
                    state: { activeCtgName: activeCtgName, activeCtgId: activeCtgId },
                  })
                }
              >
                <PageTitle>{activeCtgName}</PageTitle>
                <SubTitle>장르 더 듣기</SubTitle>
              </TitleBlock>
            </GenreMore>

            <AddPlayListModal
              open={modalOpen}
              onClose={closeModal}
              children={undefined}
              data={selectedData}
              onOpenCreateModal={() => setCreateOpen(true)}
            />
            <CreatePlayListModal
              open={isCreateOpen}
              onClose={() => setCreateOpen(false)}
              onOpenPersistModal={() => {
                setCreateOpen(false);
                setPersistOpen(true);
              }}
              children={undefined}
            />
            <PersistPlayListModal open={isPersistOpen} onClose={() => setPersistOpen(false)} children={undefined} />
            <ErrorModal
              title={'로그인이 필요한 서비스입니다'}
              open={errorModalOpen}
              onClose={() => {
                setErrorModalOpen(false);
              }}
            >
              {'로그인 후 이용해 주세요.'}
            </ErrorModal>
          </>
        )}
      </GenreMusingBlock>
    </GenreContainer>
  );
};

export default GenreMusic;

// 장르의 음악 전체영역
const GenreContainer = styled.div`
  width: 1280px;
  height: 374px;
`;

//장르의 음악 타이틀
const TitleBlock = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  margin-bottom: 16px;

  &.more {
    flex-direction: column;
    align-items: flex-start;
    padding: 164px 20px 20px 20px;
    cursor: pointer;
  }
`;

const PageTitle = styled.div`
  color: ${({ theme }) => theme.colors.primary2};
  ${({ theme }) => theme.fonts.wantedSans.T1};
`;

const SubTitle = styled.div`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.wantedSans.T2};
`;

// 장르의 음악 리스트 영역
const GenreMusingBlock = styled.div`
  display: flex;
  gap: 20px;
  width: 1280px;
  height: 330px;
`;

const GenreMore = styled.div`
  width: 176px;
  height: 256px;
  background-color: ${({ theme }) => theme.colors['600']};
  border-radius: 12px;
`;

const PreferTagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 40px;
  max-width: 100%;
`;

const PreferTag = styled.label<{ active: boolean }>`
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  background: ${({ theme, active }) => (active ? theme.colors.primary1 : theme.colors[500])};
  ${({ theme }) => theme.fonts.wantedSans.B5};
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary1};
  }
`;
