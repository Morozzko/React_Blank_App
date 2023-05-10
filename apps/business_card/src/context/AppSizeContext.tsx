import { useSizeDetect } from '@npm.piece/utils'
import { createContext, useContext } from 'react'

export const defaultValue = {
  isMobile: false,
  innerWidth: 1920,
  innerHeight: 1080,
  animationSize: {
    width: 300,
    height: 300,
  },
  componentWidth: '40vw',
  componentHeight: '80vh',
  fontSize: '3vh',
}

type AppSizeContextType = typeof defaultValue

const AppSizeContext = createContext<AppSizeContextType>({
  ...defaultValue,
})
export const useAppSize = () => useContext(AppSizeContext)
export const AppSizeProvider: FC = ({ children }) => {
  const { innerHeight, innerWidth } = useSizeDetect()
  const isMobile = innerWidth <= 768
  const animationSize = {
    width: isMobile ? 200 : 300,
    height: isMobile ? 200 : 300,
  }
  const componentWidth = isMobile ? '80vw' : '40vw'
  const componentHeight = isMobile ? '60vh' : '80vh'
  const fontSize = isMobile ? '16px' : '3vh'

  return (
    <AppSizeContext.Provider
      value={{
        isMobile,
        innerHeight,
        innerWidth,
        animationSize,
        componentWidth,
        componentHeight,
        fontSize,
      }}>
      {children}
    </AppSizeContext.Provider>
  )
}
