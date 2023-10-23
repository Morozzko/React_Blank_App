import { useEffect, useState } from 'react'

type EventArgumentType = {
  key: string
}

/**
 * The useKeyPressDetect function is a custom hook that detects if a specific key has been pressed.
 *
 * @example const isFPressed = useKeyPressDetect("f")
 *
 * @param targetKey string Specify which key the user is pressing
 *
 * @return A boolean value, which is the state of whether a key is pressed or not
 *
 */
export const useKeyPressDetect = (targetKey: string) => {
  const [isKeyPressed, setIsKeyPressed] = useState(false)

  const downHandler = ({ key }: EventArgumentType) => {
    if (key === targetKey) {
      setIsKeyPressed(true)
    }
  }

  const upHandler = ({ key }: EventArgumentType) => {
    if (key === targetKey) {
      setIsKeyPressed(false)
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

  return isKeyPressed
}
