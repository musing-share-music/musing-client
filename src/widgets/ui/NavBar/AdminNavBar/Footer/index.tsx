import { NavBarSizeProps } from 'widgets/ui/NavBar/AdminNavBar/type';

import { LeftArrowButton } from 'shared/ui/';

import { Footer as StyledFooter } from './styled';

interface FooterProps extends NavBarSizeProps {
  onClickFoldButton: () => void;
}

export const Footer = ({ size, onClickFoldButton }: FooterProps) => {
  return (
    <StyledFooter size={size}>
      <LeftArrowButton onClick={onClickFoldButton} />
    </StyledFooter>
  );
};
