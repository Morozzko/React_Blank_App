import { useEffect, useRef } from 'react'

// useTimeout(() => {}, 1000);
export const useTimeout = <T extends (...args: any[]) => any>(
	callback: T,
	delay: number
) => {
	const savedCallback = useRef<T>()
	const id = useRef<NodeJS.Timeout>()

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback
	}, [callback])

	// Set up the timeout.
	useEffect(() => {
		const executeCallback = () => {
			if (savedCallback.current) {
				savedCallback.current()
			}
		}

		if (delay || delay === 0) {
			id.current = setTimeout(executeCallback, delay)

			return () => {
				if (id.current) {
					clearTimeout(id.current)
				}
			}
		}
	}, [delay])
}
