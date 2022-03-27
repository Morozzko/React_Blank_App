import { useEffect } from 'react'

export const useSubscribe = (type: string, callback: (event?: any) => void) => {
  function f(event: any) {
    callback(event.detail.data)
  }
  useEffect(() => {
    window.addEventListener(type, f)
    return () => window.removeEventListener(type, f)
  }, [])
}
