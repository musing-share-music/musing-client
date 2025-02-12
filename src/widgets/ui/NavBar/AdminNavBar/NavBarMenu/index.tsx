import { useState } from 'react';

import { ADMIN_NAV_ITEM } from 'widgets/config/navItem';
import { NavBarSizeProps } from 'widgets/ui/NavBar/AdminNavBar/type';

import { NavBarItem, SubNavBarItem } from './NavBarItem';
import { SubNavLinkContainer } from './NavBarItem/styled';
import { NavBarItemList, NavContainer } from './styled';

export const NavBarMenu = ({ size }: NavBarSizeProps) => {
  const [openItem, setOpenItem] = useState(false);

  return (
    <NavContainer size={size}>
      <NavBarItemList size={size}>
        {ADMIN_NAV_ITEM.map((item) => {
          if (item.children) {
            return (
              <>
                <NavBarItem size={size} text={item.text} onClick={() => setOpenItem((prev) => !prev)} />
                {openItem && (
                  <SubNavLinkContainer>
                    {item.children.map((i) => (
                      <SubNavBarItem key={i.text} size={size} text={i.text} href={i.href} />
                    ))}
                  </SubNavLinkContainer>
                )}
              </>
            );
          }
          return <NavBarItem key={item.text} size={size} text={item.text} href={item.href} />;
        })}
      </NavBarItemList>
    </NavContainer>
  );
};
