import { useState } from 'react';

import { NavBarSizeProps } from 'widgets/ui/NavBar/type';

import IconPlus from 'shared/assets/image/icons/nav-bar/icon-plus.svg?react';
import { useUserInfoStore } from 'shared/store/userInfo';
import { LeftArrowButton } from 'shared/ui/';
import { ErrorModal } from 'shared/ui/Modal/ErrorModal';
import { CreatePlayListModal } from 'shared/ui/Modal/PlayListModal/CreatePlayList';
import { PersistPlayListModal } from 'shared/ui/Modal/PlayListModal/PersistPlayList';

import { AddButton, Footer as StyledFooter } from './styled';

interface FooterProps extends NavBarSizeProps {
  onClickFoldButton: () => void;
}

export const Footer = ({ size, onClickFoldButton }: FooterProps) => {
  const [isCreateOpen, setCreateOpen] = useState(false);
  const [isPersistOpen, setPersistOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);

  const { isLogin } = useUserInfoStore();
  console.log(isLogin());

  return (
    <StyledFooter size={size}>
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
      <AddButton
        onClick={() => {
          if (isLogin()) {
            setCreateOpen(true);
          } else {
            setErrorModalOpen(true);
          }
        }}
      >
        <IconPlus />
      </AddButton>
      <LeftArrowButton onClick={onClickFoldButton} />
    </StyledFooter>
  );
};
