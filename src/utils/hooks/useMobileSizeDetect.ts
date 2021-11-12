import { useEffect, useState } from 'react';
import { useDebounce } from './useDebounce';
import { MobileSizeTable } from '../../styles/breakpoints';


export const useMobileSizeDetect = (pixel: MobileSizeTable = MobileSizeTable.tablet) => {
  const isClient = typeof window !== 'undefined';

  if (!isClient) {
    return false;
  }

  const getSize = () => isClient && window.innerWidth;
  const [windowSize, setWindowSize] = useState<number>(getSize);

  const widthResize = useDebounce((px: number) => {
    setWindowSize(px);
  }, 100);


  useEffect(() => {
    const handleResize = () => {
      widthResize(getSize());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize < pixel + 1;
};
