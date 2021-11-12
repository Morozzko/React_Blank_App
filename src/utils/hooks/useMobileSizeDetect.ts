import { useEffect, useState } from 'react'
import { useDebounce } from './useDebounce'

export const useMobileSizeDetect = (pixel: number = 740) => {
  const isClient = typeof window !== 'undefined'

  if (!isClient) {
    return
  }

  const getSize = () => isClient && window.innerWidth

  const widthResize = useDebounce((px: number) => {
    setWindowSize(px)
  }, 100)

  const [windowSize, setWindowSize] = useState<number>(getSize)

  useEffect(() => {
    const handleResize = () => {
      widthResize(getSize())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize < pixel + 1
}
