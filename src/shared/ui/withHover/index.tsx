import React, { useCallback, useState } from 'react';

export interface WithHoverProps {
  isHover: boolean;
}

export const withHover = <P extends object>(
  WrappedComponent: React.JSXElementConstructor<P & WithHoverProps>,
): React.FC<Omit<P, keyof WithHoverProps>> => {
  const HoverComponent: React.FC<Omit<P, keyof WithHoverProps>> = (props) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = useCallback(() => setIsHover(true), []);
    const handleMouseLeave = useCallback(() => setIsHover(false), []);

    return (
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {/* 참고 https://react-typescript-cheatsheet.netlify.app/docs/hoc/react_hoc_docs/#docs-example-use-hocs-for-cross-cutting-concerns */}
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any
         */}
        <WrappedComponent {...(props as any)} isHover={isHover} />
      </div>
    );
  };
  return HoverComponent;
};
