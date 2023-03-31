import { useEffect, useState } from 'react'

export const useOnlineDetect = () => {
  const isClient = typeof window !== 'undefined'

  if (!isClient) {
    return false
  }

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
