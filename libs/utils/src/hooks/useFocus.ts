import { MutableRefObject, useCallback } from 'react'

type UseFocusType = () => void

/**
 * The useFocus function takes a ref as an argument and returns a setFocus function.
 * The ref should be attached to an element to make it focusable via the setFocus function.
 * @example const setFocus = useFocus(ref)
 *
 * @param htmlElRef - The ref object that will be focused.
 *
 * @return A setFocus function
 *
 */
export const useFocus = (
  htmlElRef: MutableRefObject<HTMLElement | null>
): UseFocusType =>
  useCallback(() => {
    htmlElRef.current?.focus()
  }, [htmlElRef.current])
