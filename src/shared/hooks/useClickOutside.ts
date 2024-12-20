import { useEffect } from 'react';

/**
 * ref 외부를 클릭하는 이벤트를 등록합니다.
 * */
export const useClickOutside = ({
  ref,
  open,
  click,
}: {
  ref: React.RefObject<HTMLElement>;
  open: boolean;
  click: () => void;
}) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        click();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [click, open, ref]);
};
