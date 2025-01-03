import { NavBarSizeProps } from 'widgets/ui/NavBar/type';

import IconPlus from 'shared/assets/image/icons/nav-bar/icon-plus.svg?react';
import { LeftArrowButton } from 'shared/ui/';

import { AddButton, Footer as StyledFooter } from './styled';

interface FooterProps extends NavBarSizeProps {
  onClickFoldButton: () => void;
}

export const Footer = ({ size, onClickFoldButton }: FooterProps) => {
  return (
    <StyledFooter size={size}>
      <AddButton>
        <IconPlus />
      </AddButton>
      <LeftArrowButton onClick={onClickFoldButton} />
    </StyledFooter>
  );
};
