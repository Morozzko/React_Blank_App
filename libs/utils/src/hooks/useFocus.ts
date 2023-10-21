import { MutableRefObject, useCallback, useRef } from 'react'

type UseFocusType = [
  htmlElRef: MutableRefObject<HTMLElement | null>,
  setFocus: () => void
]

export const useFocus = (): UseFocusType => {
  const htmlElRef = useRef<HTMLElement | null>(null)
  const setFocus = useCallback(() => {
    htmlElRef.current?.focus()
  }, [htmlElRef.current])

  return [htmlElRef, setFocus]
}
