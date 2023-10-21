import { useEffect } from 'react'
import { useAppSelector } from '@hooks/useAppSelector'

export const useContainer: SC = () => {
  const isDarkTheme = useAppSelector(state => state.theme.isDarkTheme)

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [isDarkTheme])
}
