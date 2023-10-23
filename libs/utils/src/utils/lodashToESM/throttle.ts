import { debounce } from './debounce'

type ThrottleOptionsType = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  leading?: boolean
  // eslint-disable-next-line @typescript-eslint/naming-convention
  trailing?: boolean
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  options?: ThrottleOptionsType
): ReturnType<typeof debounce> {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  let leading = true
  // eslint-disable-next-line @typescript-eslint/naming-convention
  let trailing = true

  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }

  if (options && typeof options === 'object') {
    leading = 'leading' in options ? !!options.leading : leading
    trailing = 'trailing' in options ? !!options.trailing : trailing
  }

  return debounce(func, wait, {
    leading,
    trailing,
    maxWait: wait,
  })
}
