import throttle from 'lodash/throttle'
import { useCallback } from 'react'

// const log = useThrottle((params) => console.log(params), 1000);
export const useThrottle = (callback: Function, delay: number) =>
  useCallback(
    throttle((...args) => callback(...args), delay),
    [delay]
  )
