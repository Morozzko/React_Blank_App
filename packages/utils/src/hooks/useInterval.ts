import { useEffect, useRef } from 'react'

// useInterval(() => {}, 1000);
export const useInterval = (callback: (arg?: any) => any, delay: number) => {
  const savedCallback = useRef<(arg?: any) => any>()

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
      const id = setInterval(tick, delay)

      return () => {
        try {
          clearInterval(id)
        } catch (e) {
          console.error(e)
        }
      }
    }
  }, [delay])
}
