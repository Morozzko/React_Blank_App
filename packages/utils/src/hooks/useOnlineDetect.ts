import { useEffect, useState } from 'react'

/**
 * The useOnlineDetect function is a React hook that returns the current online status of the user.
 * It uses navigator.onLine to determine if the user is online or offline, and updates its state accordingly when it detects a change in connectivity.
 *
 * @example const isOnline = useOnlineDetect()
 *
 * @return A boolean value
 *
 */
export const useOnlineDetect = () => {
  const isClient = typeof window !== 'undefined'

  if (!isClient) {
    return false
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  let initialState = navigator.onLine

  if (typeof initialState === 'undefined') {
    console.warn('Your browser dont support navigator.onLine')
    initialState = true
  }

  const [isOnline, setIsOnline] = useState<boolean>(initialState)

  const setOnline = () => setIsOnline(true)
  const setOffline = () => setIsOnline(false)

  useEffect(() => {
    window.addEventListener('offline', setOffline)
    window.addEventListener('online', setOnline)

    return () => {
      window.removeEventListener('offline', setOffline)
      window.removeEventListener('online', setOnline)
    }
  }, [])

  return isOnline
}
