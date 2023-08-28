import { MutableRefObject, useCallback, useEffect } from 'react'

export const useClickOutside = (
  ref: MutableRefObject<Element | null>,
  callback: Function
) => {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref?.current && !ref.current?.contains(event.target as Node)) {
        callback(event)
      }
    },
    [ref?.current, callback]
  )

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])
}
