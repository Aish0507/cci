/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

const useResizeObserver = (ref: any) => {
  const [dimensions, setDimensions] = useState(null);
  useEffect(() => {
    const observeTarget = ref.current;
    const resizeObserver = new ResizeObserver((entries: any[]) => {
      entries.forEach((entry: any) => {
        setDimensions(entry.contentRect);
      });
    });
    resizeObserver.observe(observeTarget);
    return () => {
      resizeObserver.unobserve(observeTarget);
    };
  }, [ref]);
  return dimensions;
};

// eslint-disable-next-line import/no-unused-modules
export default useResizeObserver;
