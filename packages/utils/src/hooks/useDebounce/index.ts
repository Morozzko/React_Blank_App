import debounce from 'lodash.debounce'
import { useCallback } from 'react'

type OptionsType = Partial<{
  leading: boolean
  trailing: boolean
  maxWait: number
}>

interface IDebounce<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): ReturnType<T> | undefined

  cancel(): void

  flush(): ReturnType<T> | undefined
}

// const log = useDebounce((params) => console.log(params), 1000);
export const useDebounce = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number,
  options?: OptionsType
): IDebounce<T> =>
  useCallback(
    debounce((...args: Parameters<T>) => callback(...args), delay, options),
    [delay]
  )
