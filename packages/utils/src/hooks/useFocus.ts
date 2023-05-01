import { MutableRefObject, useCallback, useRef } from 'react'

type UseFocusType = [htmlElRef: MutableRefObject<any>, setFocus: () => void]

// const [htmlElRef, setFocus] = useFocus()
export const useFocus = (): UseFocusType => {
	const htmlElRef = useRef<any>(null)
	const setFocus = useCallback(() => {
		htmlElRef?.current?.focus()
	}, [htmlElRef?.current])

	return [htmlElRef, setFocus]
}
