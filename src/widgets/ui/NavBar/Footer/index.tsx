import { useState } from 'react';

import { NavBarSizeProps } from 'widgets/ui/NavBar/type';

import IconPlus from 'shared/assets/image/icons/nav-bar/icon-plus.svg?react';
import { LeftArrowButton } from 'shared/ui/';
import { CreatePlayListModal } from 'shared/ui/Modal/PlayListModal/CreatePlayList';
import { PersistPlayListModal } from 'shared/ui/Modal/PlayListModal/PersistPlayList';

import { AddButton, Footer as StyledFooter } from './styled';

interface FooterProps extends NavBarSizeProps {
  onClickFoldButton: () => void;
}

export const Footer = ({ size, onClickFoldButton }: FooterProps) => {
  const [isCreateOpen, setCreateOpen] = useState(false);
  const [isPersistOpen, setPersistOpen] = useState(false);

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
      <AddButton onClick={() => setCreateOpen(true)}>
        <IconPlus />
      </AddButton>
      <LeftArrowButton onClick={onClickFoldButton} />
    </StyledFooter>
  );
};
