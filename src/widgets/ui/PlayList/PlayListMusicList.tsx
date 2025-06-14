import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

import IconCheck from 'shared/assets/image/icons/icon-check.svg?react';
// import CoverSrc from 'shared/assets/image/main/image1.png';
// import { ROUTES } from 'shared/config/routes';

// import { MoreButton } from './MoreButton';
// import { commonStyles } from 'shared/styles/common';

export interface Video {
  id: string;
  name: string;
  playtime: string | null;
  albumName: string;
  songLink: string;
  thumbNailLink: string;
  genres: string[] | null;
}

export interface VideoProps {
  videoList: Video[];
  modify: boolean;
  setVideoList: (videos: Video[]) => void;
}

export const PlayListMusicList = ({ videoList, modify, setVideoList }: VideoProps) => {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(videoList.map(() => false));

  useEffect(() => {
    if (Array.isArray(videoList)) {
      setCheckedItems(videoList.map(() => false));
    }
  }, [videoList, modify]);

  const handleToggleItem = (index: number) => {
    const updated = [...checkedItems];
    updated[index] = !updated[index];
    setCheckedItems(updated);
  };

  const handleSelectAll = () => {
    setCheckedItems(videoList.map(() => true));
  };

  const handleDeselectAll = () => {
    setCheckedItems(videoList.map(() => false));
  };

  const handleDeleteSelected = () => {
    const filteredVideos = videoList.filter((_, index) => !checkedItems[index]);

    // ✅ 상위 상태인 modifyData.videoList를 바꾸는 함수 호출
    setVideoList(filteredVideos);

    // 체크박스 상태 초기화
    setCheckedItems(filteredVideos.map(() => false));
  };

  const selectedCount = checkedItems.filter(Boolean).length;

  return (
    <PlayListMusicBox>
      {modify && (
        <PlayListCheckBlock>
          <CheckBoxWrapper>
            <CheckBox
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  handleSelectAll();
                } else {
                  handleDeselectAll();
                }
              }}
              checked={selectedCount === videoList.length && videoList.length > 0}
            />
            <IconCheckStyled />
            <CheckBoxLabel>전체 선택</CheckBoxLabel>
          </CheckBoxWrapper>

          <CheckInfoBlock>
            <CheckCount>{selectedCount}곡 선택</CheckCount>
            <CheckDelete onClick={handleDeleteSelected}>삭제</CheckDelete>
          </CheckInfoBlock>
        </PlayListCheckBlock>
      )}

      {videoList.map((item, index) => (
        <PlayListItem
          isChecked={checkedItems[index]}
          key={item.id}
          onClick={() => {
            if (modify) {
              handleToggleItem(index);
            } else {
              window.open(item.songLink, '_blank');
            }
          }}
        >
          <PlayListInfoBlock>
            <PlayListInfoImg src={item.thumbNailLink} />
            <PlayListInfo>
              <PlayListInfoTitle>{item.albumName}</PlayListInfoTitle>
              <PlayListInfoName>{item.name}</PlayListInfoName>
              {/* <TagBlock>
                <Tag>K-POP</Tag> <Tag>귀여운</Tag>
              </TagBlock> */}
            </PlayListInfo>
          </PlayListInfoBlock>
        </PlayListItem>
      ))}
    </PlayListMusicBox>
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
  cursor: pointer;
`;

const PlayListInfoBlock = styled.div`
  min-width: 314px;
  min-height: 144px;
  display: flex;
  gap: 28px;
`;

const PlayListInfoImg = styled.img`
  width: 144px;
  height: 144px;
  border-radius: 6px;
`;

const PlayListInfo = styled.div`
  min-width: 400px;
  min-height: 144px;
  padding: 8px;
  position: relative;
`;

const PlayListInfoTitle = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B2};
  color: ${({ theme }) => theme.colors[100]};
  position: absolute;
  left: 0px;
  top: 8px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%; // 또는 정확한 너비 지정 (예: 150px)
`;

const PlayListInfoName = styled.div`
  ${({ theme }) => theme.fonts.wantedSans.B6};
  color: ${({ theme }) => theme.colors[200]};
  position: absolute;
  left: 0px;
  top: 40px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 400px;
`;

// const TagBlock = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 12px;
//   flex-wrap: wrap;
//   position: absolute;
//   left: 0px;
//   bottom: 8px;
//   height: 33px;
//   width: 300px;
// `;

// const Tag = styled.div`
//   padding: 6px 10px 7px 10px;
//   border-radius: 4px;
//   background: ${({ theme }) => theme.colors[400]};
//   color: ${({ theme }) => theme.colors[200]};
//   ${({ theme }) => theme.fonts.wantedSans.B6};
// `;
