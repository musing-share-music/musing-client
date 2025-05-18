import styled from '@emotion/styled';

import { useGetPlayListQuery } from 'features/playlist/lib/useGetPlayListQuery';

import { Button } from 'shared/ui/Button';
import { SelectBox } from 'shared/ui/Input';
import { Modal } from 'shared/ui/Modal/BaseModal';
import { OuterCloseModal } from 'shared/ui/Modal/OuterCloseModal';
import { OuterCloseModalProps } from 'shared/ui/Modal/type';

export const AddPlayListModal = ({ ...props }: OuterCloseModalProps) => {
  const { data } = useGetPlayListQuery();

  return (
    <OuterCloseModal {...props}>
      <Content>
        <TitleWrap>
          <Modal.Title>나의 플레이리스트</Modal.Title>
        </TitleWrap>
        <SelectBox
          placeholder="플레이리스트를 선택해 주세요."
          options={data?.playLists.map((playlist: { youtubePlaylistId: string; listname: string }) => ({
            value: playlist.youtubePlaylistId,
            label: playlist.listname,
          }))}
          onChange={(option) => console.log(option)}
        />
        <ButtonBlock>
          <ButtonWrap>
            <Button onClick={props.onClose}>추가</Button>
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
