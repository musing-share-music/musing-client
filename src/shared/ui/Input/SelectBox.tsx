import styled from '@emotion/styled';
import { useRef, useState } from 'react';

import { useClickOutside } from 'shared/hooks/useClickOutside';

export type Option = {
  label: string;
  value: string;
};

type CustomSelectProps = {
  options: Option[];
  onChange?: (option: Option) => void;
  placeholder?: string;
};

export const SelectBox = ({ options, onChange, placeholder }: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const ref = useRef<HTMLUListElement>(null);
  const selectRef = useRef<HTMLDivElement>(null);
  useClickOutside({ ref, ignoreRef: selectRef, click: () => setIsOpen(false) });

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleOptionClick = (option: Option) => {
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
              key={option.value}
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
  width: 100%;
`;

const Selected = styled.div`
  width: 100%;
  display: flex;
  padding: 18px 26px;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.B5};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors[400]};
  background: ${({ theme }) => theme.colors[600]};
  cursor: pointer;
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors[500]};
  box-shadow: 0px 0px 10px 0px rgba(20, 20, 22, 0.64);
`;
const OptionItem = styled.li<{ isSelected?: boolean }>`
  padding: 18px 26px;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors[400]};
  background: ${({ isSelected, theme }) => (isSelected ? theme.colors[400] : theme.colors[600])};
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.B6};
  &:hover {
    background: ${({ theme }) => theme.colors[400]};
    color: ${({ theme }) => theme.colors.white};
  }
  &:first-child {
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
  }
  &:last-child {
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
  }
`;
const Arrow = styled.span`
  margin-left: 6px;
  font-size: 12px;
`;
