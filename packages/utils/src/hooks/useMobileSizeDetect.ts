import { useEffect, useState } from 'react'
import { useDebounce } from './useDebounce'

export const useMobileSizeDetect = (pixel = 768) => {
  const isClient = typeof window !== 'undefined'

  if (!isClient) {
    return false
  }

  const getSize = () => isClient && window.innerWidth
  const [windowSize, setWindowSize] = useState<number>(getSize)

  const widthResize = useDebounce((px: number) => {
    setWindowSize(px)
  }, 100)

  const handleResize = () => {
    widthResize(getSize())
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize < pixel + 1
}
