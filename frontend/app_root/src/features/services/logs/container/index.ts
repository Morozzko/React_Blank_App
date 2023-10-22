import { useEffect } from 'react'

export const useContainer: SC = () => {
  useEffect(() => {
    console.log('mount')
  }, [])
}
