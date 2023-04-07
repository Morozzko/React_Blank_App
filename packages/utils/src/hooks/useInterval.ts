import { useEffect, useRef } from 'react'

// useInterval(() => {}, 1000);
export const useInterval = <T extends (...args: any[]) => any>(callback: T, delay: number) => {
  const savedCallback = useRef<T>()
  const id = useRef<NodeJS.Timeout>()
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    const tick = () => {
      if (savedCallback.current) {
        savedCallback.current()
      }
    }

    if (delay !== null) {
      id.current = setInterval(tick, delay)

      return () => {
        try {
          clearInterval(id.current)
        } catch (e) {
          console.error(e)
        }
      }
    }
  }, [delay])
}
