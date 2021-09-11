import { useCallback } from 'react'
import { debounce } from 'lodash'

//const log = useDebounce((params) => console.log(params), 1000);
export const useDebounce = (callback: Function, delay: number) =>
  useCallback(
    debounce((...args) => callback(...args), delay),
    [delay]
  )
