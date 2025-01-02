import { LeftArrowButton } from 'shared/ui/';
import { NavBarSizeProps } from 'shared/ui/AdminNavBar/type';

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
