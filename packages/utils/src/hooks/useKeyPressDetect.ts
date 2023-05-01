import { useEffect, useState } from 'react'

type EventArgumentType = {
	key: string
}

export const useKeyPressDetect = (targetKey: string) => {
	const [keyPressed, setKeyPressed] = useState(false)

	const downHandler = ({ key }: EventArgumentType) => {
		if (key === targetKey) {
			setKeyPressed(true)
		}
	}

	const upHandler = ({ key }: EventArgumentType) => {
		if (key === targetKey) {
			setKeyPressed(false)
		}
	}

	useEffect(() => {
		window.addEventListener('keydown', downHandler)
		window.addEventListener('keyup', upHandler)

		return () => {
			window.removeEventListener('keydown', downHandler)
			window.removeEventListener('keyup', upHandler)
		}
	}, [])

	return keyPressed
}
