import throttle from 'lodash.throttle'
import { useCallback } from 'react'

type OptionsType = Partial<{
  leading: boolean
  trailing: boolean
}>

interface IThrottle<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): ReturnType<T> | undefined

  cancel(): void

  flush(): ReturnType<T> | undefined
}

// const log = useThrottle((params) => console.log(params), 1000);
export const useThrottle = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number,
  options?: OptionsType
): IThrottle<T> =>
  useCallback(
    throttle((...args: Parameters<T>) => callback(...args), delay, {
      trailing: options?.trailing || false,
      leading: options?.leading || true,
    }),
    [delay]
  )
