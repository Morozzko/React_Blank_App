import { useEffect, useState } from 'react'

type EventArgument = {
  key: string
};

export default function useKeyPressed(targetKey: string): boolean {
  const [keyPressed, setKeyPressed] = useState(false)

  const downHandler = ({ key }: EventArgument) => {
    if (key === targetKey) {
      setKeyPressed(true)
    }
  }

  const upHandler = ({ key }: EventArgument) => {
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
