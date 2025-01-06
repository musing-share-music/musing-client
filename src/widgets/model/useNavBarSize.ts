import { useState } from 'react';

import { NavBarSize } from './types';

/**
 * NavBar의 사이즈를 관리하는 Hook
 */
export const useNavBarSize: () => {
  size: NavBarSize;
  toggleNavBar: () => void;
} = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const toggleNavBar = () => {
    setToggle((prev) => !prev);
  };

  const size = toggle ? 'small' : 'large';

  return { size, toggleNavBar };
};
