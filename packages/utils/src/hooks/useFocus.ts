import { MutableRefObject, useCallback, useRef } from 'react'

type useFocusType = [htmlElRef: MutableRefObject<any>, setFocus: () => void]

// const [htmlElRef, setFocus] = useFocus()
export const useFocus = (): useFocusType => {
  const htmlElRef = useRef<any>(null)
  const setFocus = useCallback(() => {
    htmlElRef?.current?.focus()
  }, [htmlElRef?.current])

  return [htmlElRef, setFocus]
}
