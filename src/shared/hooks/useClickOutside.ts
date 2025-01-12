import { useEffect } from 'react';

/**
 * ref 외부를 클릭하는 이벤트를 등록합니다.
 * */
export const useClickOutside = ({
  ref,
  click,
  ignoreRef, // 해당 요소 클릭은 클릭 이벤트 무시
}: {
  ref: React.RefObject<HTMLElement>;
  ignoreRef?: React.RefObject<HTMLElement> | null;
  click: () => void;
}) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        ref.current &&
        !ref.current.contains(e.target as Node) &&
        !(ignoreRef?.current && ignoreRef.current.contains(e.target as Node))
      ) {
        click();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [click, ignoreRef, ref]);
};
