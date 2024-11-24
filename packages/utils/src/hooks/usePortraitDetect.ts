import { useEffect, useState } from 'react'

export /**
 * The usePortraitDetect function is a React hook that returns true if the device is in portrait mode, and false otherwise.
 *
 * @example const isPortrait = usePortraitDetect()
 *
 * @return A boolean value
 *
 */
const usePortraitDetect = () => {
  const isClient = typeof window !== 'undefined'

  if (!isClient) {
    return false
  }

  const portrait = window.matchMedia('(orientation: portrait)')
  const [isPortrait, setIsPortrait] = useState<boolean>(!portrait.matches)
  const changeHandler = (event: MediaQueryListEvent) => {
    setIsPortrait(!event.matches)
  }

  useEffect(() => {
    portrait.addEventListener('change', changeHandler)

    return () => portrait.removeEventListener('change', changeHandler)
  }, [])

  return isPortrait
}
