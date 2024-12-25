import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';

import IconCheck from 'shared/assets/image/icons/icon-check.svg?react';
import CoverSrc from 'shared/assets/image/main/image1.png';

import { MoreButton } from './MoreButton';
// import { commonStyles } from 'shared/styles/common';

export const PlayListMusicList = () => {
  const [open, setOpen] = useState(false);
  const [isChecked, setisChecked] = useState([true, false]);
  const menuItem = [
    {
      content: ['곡 정보', '좋아요', '플레이리스트 추가'],
      onClick: () => {
        setOpen(true);
      },
    },
  ];
  return (
    <>
      <PlayListMusicBox>
        <PlayListCheckBlock>
          <CheckBoxWrapper>
            <CheckBox type="checkbox" />
            <IconCheckStyled />
            <CheckBoxLabel>전체 선택</CheckBoxLabel>
          </CheckBoxWrapper>

          <CheckInfoBlock>
            <CheckCount>3곡 선택</CheckCount>
            <CheckDelete>삭제</CheckDelete>
          </CheckInfoBlock>
        </PlayListCheckBlock>

        <PlayListItem isChecked={isChecked[0]}>
          <PlayListInfoBlock>
            <PlayListInfoImg src={CoverSrc}></PlayListInfoImg>
            <PlayListInfo>
              <PlayListInfoTitle>Pink!</PlayListInfoTitle>
              <PlayListInfoName>권진아</PlayListInfoName>
              <TagBlock>
                <Tag>K-POP</Tag> <Tag>귀여운</Tag>
              </TagBlock>
            </PlayListInfo>
          </PlayListInfoBlock>
          <MoreButton menuItem={menuItem} />
        </PlayListItem>

        <PlayListItem isChecked={isChecked[1]}>
          <PlayListInfoBlock>
            <PlayListInfoImg src={CoverSrc}></PlayListInfoImg>
            <PlayListInfo>
              <PlayListInfoTitle>Pink!</PlayListInfoTitle>
              <PlayListInfoName>권진아</PlayListInfoName>
              <TagBlock>
                <Tag>K-POP</Tag> <Tag>귀여운</Tag>
              </TagBlock>
            </PlayListInfo>
          </PlayListInfoBlock>
          <MoreButton menuItem={menuItem} />
        </PlayListItem>
      </PlayListMusicBox>
    </>
  );
};

const PlayListMusicBox = styled.div`
  width: 840px;
  height: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors[600]};
  background: ${({ theme }) => theme.colors[700]};
`;

const PlayListCheckBlock = styled.div`
  padding: 16px;
  width: 808px;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CheckBoxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const IconCheckStyled = styled(IconCheck)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  pointer-events: none;
  opacity: 0;
`;

const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  border: 1px solid #70707d;
  border-radius: 2px;
  appearance: none;
  cursor: pointer;
  position: relative;

  &:checked {
    background: ${({ theme }) => theme.colors.primary2};
    border: none;

    & + ${IconCheckStyled} {
      opacity: 1;
    }
  }
`;

const CheckBoxLabel = styled.span`
  ${({ theme }) => theme.fonts.wantedSans.B5};
  color: ${({ theme }) => theme.colors[100]};
  font-size: 14px;
  cursor: pointer;
`;

const CheckInfoBlock = styled.div`
  width: auto;
  height: 32px;
  display: flex;
  gap: 10px;
`;

const CheckCount = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B4};
  color: ${({ theme }) => theme.colors.primary2};
  cursor: pointer;
`;

const CheckDelete = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B5};
  color: ${({ theme }) => theme.colors[100]};
  cursor: pointer;
`;

const PlayListItem = styled.div<{ isChecked: boolean }>`
  ${({ isChecked, theme }) =>
    isChecked
      ? css`
          width: 808px;
          height: 192px;
          padding: 24px;
          display: flex;
          justify-content: space-between;
          border-radius: 8px;
          align-items: center;
          background: ${theme.colors[500]};
          border: 1px solid ${theme.colors.primary2};
        `
      : css`
          width: 808px;
          height: 192px;
          padding: 24px;
          display: flex;
          justify-content: space-between;
          border-radius: 8px;
          align-items: center;
        `};
`;

const PlayListInfoBlock = styled.div`
  width: 314px;
  height: 144px;
  display: flex;
  gap: 28px;
`;

const PlayListInfoImg = styled.img`
  width: 144px;
  height: 144px;
  border-radius: 6px;
`;

const PlayListInfo = styled.div`
  width: 142px;
  height: 144px;
  padding: 8px;
  position: relative;
`;

const PlayListInfoTitle = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B2};
  color: ${({ theme }) => theme.colors[100]};
  position: absolute;
  left: 0px;
  top: 8px;
`;

const PlayListInfoName = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B6};
  color: ${({ theme }) => theme.colors[200]};
  position: absolute;
  left: 0px;
  top: 40px;
`;

const TagBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  position: absolute;
  left: 0px;
  bottom: 8px;
  height: 33px;
  width: 300px;
`;

const Tag = styled.div`
  padding: 6px 10px 7px 10px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors[400]};
  color: ${({ theme }) => theme.colors[200]};
  ${({ theme }) => theme.fonts.wantedSans.B6};
`;
