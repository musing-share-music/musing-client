import styled from '@emotion/styled';
import { useRef, useState } from 'react';

import { useClickOutside } from 'shared/hooks/useClickOutside';

type Option<T> = {
  label: string;
  value: T;
};

type FilterProps<T = string> = {
  options: Option<T>[];
  onChange?: (option: Option<T>) => void;
  placeholder?: string;
};

export const Filter = <T,>({ options, onChange, placeholder }: FilterProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option<T> | null>(null);
  const ref = useRef<HTMLUListElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);
  useClickOutside({ ref, ignoreRef: selectRef, click: () => setIsOpen(false) });

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option: Option<T>) => {
    setSelectedOption(option);
    if (onChange) onChange(option);
    setIsOpen(false);
  };

  return (
    <Container>
      <Selected ref={selectRef} onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : placeholder || 'Select an option'}
        <Arrow>{isOpen ? '▲' : '▼'}</Arrow>
      </Selected>
      {isOpen && (
        <Dropdown ref={ref}>
          {options.map((option) => (
            <OptionItem
              key={option.label}
              isSelected={selectedOption?.value === option.value}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </OptionItem>
          ))}
        </Dropdown>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

const Selected = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors[100]};
  ${({ theme }) => theme.fonts.wantedSans.B4};
  cursor: pointer;
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 22px;
  gap: 4px;
  width: 100%;
  min-width: 148px;
  padding: 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors[500]};
  box-shadow: 0px 0px 10px 0px rgba(20, 20, 22, 0.64);
`;
const OptionItem = styled.li<{ isSelected?: boolean }>`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  background: ${({ isSelected, theme }) => (isSelected ? theme.colors[400] : theme.colors[500])};
  color: ${({ theme }) => theme.colors[200]};
  text-align: center;
  ${({ theme }) => theme.fonts.wantedSans.B6};
  &:hover {
    background: ${({ theme }) => theme.colors[400]};
    color: ${({ theme }) => theme.colors.white};
  }
`;
const Arrow = styled.span`
  margin-left: 6px;
  font-size: 12px;
`;
