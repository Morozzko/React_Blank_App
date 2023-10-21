import { useEffect, useState } from 'react'

type EventArgumentType = {
  key: string
}

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
