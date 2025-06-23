import styled from '@emotion/styled';
import { ComponentProps, useRef, useState } from 'react';

import { useClickOutside } from 'shared/hooks/useClickOutside';

import { TextInput } from '.';

// SearchFilter 컴포넌트에서 사용할 옵션
export type Option = {
  label: string;
  value: string;
};

// SearchFilter 컴포넌트 props
type SearchFilterProps = {
  options: Option[];
  onSelectChange?: (option: Option) => void; // 선택한 옵션 변경 시 호출되는 콜백
  searchFilterPlaceholder?: string; // Filter 컴포넌트의 placeholder
};

type SearchInputWithFilterProps = ComponentProps<typeof TextInput> & SearchFilterProps;

export const SearchInputWithFilter = ({
  options,
  onSelectChange,
  searchFilterPlaceholder,
  ...textInputProps
}: SearchInputWithFilterProps) => {
  return (
    <>
      <SearchFilter
        options={options}
        searchFilterPlaceholder={searchFilterPlaceholder}
        onSelectChange={onSelectChange}
      />
      <TextInputWrapper>
        <TextInput {...textInputProps} />
      </TextInputWrapper>
    </>
  );
};

/**
 * SearchInput 함께 사용하는 Filter 컴포넌트
 */
const SearchFilter = ({
  options,
  onSelectChange: onChange,
  searchFilterPlaceholder: placeholder,
}: SearchFilterProps) => {
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
    <Container width={148}>
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

const Container = styled.div<{ width: number }>`
  display: flex;
  justify-content: flex-end;
  position: relative;
  border: none;
  width: ${({ width }) => `${width}px`};
`;

const Selected = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 33px;
  width: 148px;
  height: 60px;
  position: relative;
  border-radius: 36px;
  background-color: ${({ theme }) => theme.colors[500]};
  color: ${({ theme }) => theme.colors[100]};
  ${({ theme }) => theme.fonts.wantedSans.B4};
  cursor: pointer;
`;

const Dropdown = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  display: flex;
  flex-direction: column;
  margin-top: 22px;
  gap: 4px;
  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors[500]};
  box-shadow: 0px 0px 10px 0px rgba(20, 20, 22, 0.64);
`;
const OptionItem = styled.li<{ isSelected?: boolean }>`
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  background: ${({ isSelected, theme }) => (isSelected ? theme.colors[400] : theme.colors[500])};
  color: ${({ theme }) => theme.colors[200]};
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

const TextInputWrapper = styled.div`
  width: 888px;
`;
