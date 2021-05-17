import { useCallback } from 'react';
import { throttle } from 'lodash';

//const log = useThrottle((params) => console.log(params), 1000);

// eslint-disable-next-line
export const useThrottle = (callback: Function, delay: number) =>
  useCallback(
    throttle((...args) => callback(...args), delay),
    [delay]
  );
