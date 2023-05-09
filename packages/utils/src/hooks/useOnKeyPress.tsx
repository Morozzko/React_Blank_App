import { useEffect } from 'react'

export const useOnKeyPress = (callback: Function, key: string) => {
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key.toLowerCase() === key.toLowerCase()) {
				callback()
			}
		}

		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [callback, key])
}
