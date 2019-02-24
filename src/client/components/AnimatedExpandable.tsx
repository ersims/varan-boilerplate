import React, { useEffect, useRef, useState } from 'react';

// Types
interface Props {
  isOpen?: boolean;
  duration?: number;
  type?: 'ease-in-out' | 'linear';
  className?: string;
  children?: React.ReactNode;
}

export const AnimatedExpandable = ({
  isOpen = false,
  duration = 250,
  type = 'ease-in-out',
  className,
  children,
}: Props) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [toHeight, setToHeight] = useState<number | 'auto'>(0);

  useEffect(() => {
    let timer: number | null = null;
    // Opening
    if (isOpen && toHeight === 0) {
      if (divRef.current) {
        const expectedHeight = divRef.current.getBoundingClientRect().height;
        setToHeight(expectedHeight);
        timer = window.setTimeout(() => setToHeight('auto'), duration);
      } else setToHeight('auto');
    }

    // Closing
    else if (!isOpen && toHeight !== 0) {
      if (divRef.current) {
        const currentHeight = divRef.current.getBoundingClientRect().height;
        setToHeight(currentHeight);
        timer = window.setTimeout(() => setToHeight(0), (1000 / 60) * 2.1);
      } else setToHeight(0);
    }

    // this will clear Timeout when component unmont like in willComponentUnmount
    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, [isOpen, duration]);

  return (
    <div
      style={{
        height: toHeight,
        transition: `height ${duration}ms ${type}`,
        overflow: 'hidden',
      }}
      className={className}
    >
      <div ref={divRef} style={{ overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  );
};
