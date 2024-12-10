import IconPlus from 'shared/assets/image/icons/nav-bar/icon-plus.svg?react';
import { NavBarSizeProps } from 'shared/ui/NavBar/type';

import { AddButton, FoldButton, Footer as StyledFooter } from './styled';

interface FooterProps extends NavBarSizeProps {
  onClickFoldButton: () => void;
}

export const Footer = ({ size, onClickFoldButton }: FooterProps) => {
  return (
    <StyledFooter size={size}>
      <AddButton>
        <IconPlus />
      </AddButton>
      <FoldButton onClick={onClickFoldButton} />
    </StyledFooter>
  );
};
