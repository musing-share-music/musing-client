import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { useGetPlayListQuery } from 'features/playlist/lib/useGetPlayListQuery';
import { usePlayListAddtMutation } from 'features/playlist/lib/usePostPlayListAddQuery';

import { GenreMusicsItem } from 'entities/home/model/types';

import { Button } from 'shared/ui/Button';
import { SelectBox } from 'shared/ui/Input';
import { Modal } from 'shared/ui/Modal/BaseModal';
import { OuterCloseModal } from 'shared/ui/Modal/OuterCloseModal';
import { OuterCloseModalProps } from 'shared/ui/Modal/type';

interface AddPlayListModalProps extends OuterCloseModalProps {
  data: GenreMusicsItem | null;
  onOpenCreateModal?: () => void;
}

export const AddPlayListModal = ({ ...props }: AddPlayListModalProps) => {
  const { data } = useGetPlayListQuery();
  const addMutation = usePlayListAddtMutation();
  const musicLink = props.data?.musicLink;
  const [playListLink, setPlayListLink] = useState('');

  useEffect(() => {
    if (props.open == false) {
      setPlayListLink('');
    }
  }, [props.open]);

  return (
    <OuterCloseModal {...props}>
      <Content>
        <TitleWrap>
          <Modal.Title>나의 플레이리스트</Modal.Title>
        </TitleWrap>

        <SelectBox
          placeholder={
            !data?.playLists || data.playLists.length === 0
              ? '플레이리스트가 없습니다. 먼저 생성해주세요.'
              : '플레이리스트를 선택해 주세요.'
          }
          options={
            data?.playLists?.map((playlist: { youtubePlaylistId: string; listname: string }) => ({
              value: playlist.youtubePlaylistId,
              label: playlist.listname,
            })) ?? []
          }
          onChange={(option) => setPlayListLink(option.value)}
        />

        <AddPlayList onClick={props.onOpenCreateModal}>플레이리스트 추가</AddPlayList>

        <ButtonBlock>
          <ButtonWrap>
            <Button
              disabled={!data?.playLists || data.playLists.length === 0 || playListLink === ''}
              onClick={() => {
                addMutation.mutate(
                  {
                    playlistId: playListLink,
                    musicUrl: musicLink ?? '',
                  },
                  {
                    onSuccess: () => {
                      alert('플레이리스트에 추가되었습니다.');
                      props.onClose();
                    },
                    onError: () => {
                      alert('플레이리스트 추가 중 오류가 발생했습니다.');
                      props.onClose();
                    },
                  },
                );
              }}
            >
              추가
            </Button>
          </ButtonWrap>
        </ButtonBlock>
      </Content>
    </OuterCloseModal>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 660px;
  padding: 36px 44px 44px 44px;
  position: relative;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const ButtonBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const ButtonWrap = styled.div`
  min-width: 163px;
  display: flex;
  gap: 23px;
`;

const AddPlayList = styled.div`
  color: ${({ theme }) => theme.colors.secondary1};
  ${({ theme }) => theme.fonts.wantedSans.B5};
  cursor: pointer;
`;
