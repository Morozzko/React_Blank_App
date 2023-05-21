import { useEffect, useState } from 'react'
import { useDebounce } from './useDebounce'

export const useSizeDetect = () => {
  const getInnerWidth = () => window.innerWidth
  const getInnerHeight = () => window.innerHeight

  const getClientWidth = () => document.documentElement.clientWidth
  const getClientHeight = () => document.documentElement.clientHeight

  const [innerWidth, setInnerWidth] = useState<number>(getInnerWidth())
  const [innerHeight, setInnerHeight] = useState<number>(getInnerHeight())

  const [clientWidth, setClientWidth] = useState<number>(getClientWidth())
  const [clientHeight, setClientHeight] = useState<number>(getClientHeight())

  const widthResize = useDebounce(
    ({
      clientHeight = 0,
      clientWidth = 0,
      innerHeight = 0,
      innerWidth = 0,
    }) => {
      setClientHeight(clientHeight)
      setClientWidth(clientWidth)
      setInnerHeight(innerHeight)
      setInnerWidth(innerWidth)
    },
    20
  )

  const handleResize = () => {
    widthResize({
      clientHeight: getClientHeight(),
      clientWidth: getClientWidth(),
      innerHeight: getInnerHeight(),
      innerWidth: getInnerWidth(),
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    clientHeight,
    clientWidth,
    innerHeight,
    innerWidth,
  }
}
