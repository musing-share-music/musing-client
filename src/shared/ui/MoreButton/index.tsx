import styled from '@emotion/styled';
import { useRef, useState } from 'react';

import IconShowMoreSvg from 'shared/assets/image/icons/icon-show-more.svg?react';
import { useClickOutside } from 'shared/hooks/useClickOutside';
import { commonStyles } from 'shared/styles/common';

interface MoreButtonProps {
  width?: number;
  height?: number;
  menuItem: {
    content: React.ReactNode;
    onClick: () => void;
  }[];
}

export const MoreButton = ({ width = 20, height = 20, menuItem }: MoreButtonProps) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside({ ref, open, click: () => setOpen(false) });

  return (
    <Box>
      <Button onClick={() => setOpen(true)}>
        <IconShowMoreSvg width={width} height={height} />
      </Button>
      {open && (
        <MenuList ref={ref}>
          {menuItem.map(({ content, onClick }) => (
            <MenuButton key={content?.toString()} onClick={onClick}>
              {content}
            </MenuButton>
          ))}
        </MenuList>
      )}
    </Box>
  );
};

const Box = styled.div`
  position: relative;
`;

const Button = styled.button`
  width: fit-content;
  height: fit-content;
  margin: 0;
  padding: 4px;
  border: none;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors[400]};
    border-radius: 4px;
  }
  ${commonStyles.hoverTransition}
`;

const MenuList = styled.div`
  position: absolute;
  right: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 10px;
  width: 192px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors[500]};
  box-shadow: 0px 0px 10px 0px rgba(20, 20, 22, 0.64);
`;

const MenuButton = styled.button`
  width: 100%;
  padding: 10px 28px;
  border: none;
  color: ${({ theme }) => theme.colors[200]};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    border-radius: 4px;
    background: ${({ theme }) => theme.colors[400]};
  }
  ${commonStyles.hoverTransition}
`;
