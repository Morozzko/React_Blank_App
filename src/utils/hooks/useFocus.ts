import { MutableRefObject, useRef } from 'react'

type useFocusType = [htmlElRef: MutableRefObject<any>, setFocus: () => void]

export const useFocus = (): useFocusType => {
  const htmlElRef = useRef<any>(null)
  const setFocus = () => {
    htmlElRef.current && htmlElRef.current.focus()
  }

  return [htmlElRef, setFocus]
}
