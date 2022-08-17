import { useMobileSizeDetect } from '@npm.piece/hooks'
import { useEffect } from 'react'
import { useActions } from '../../../../utils/hooks/useActions'
import { useAppSelector } from '../../../../utils/hooks/useAppSelector'
import { Actions } from '../store'

export const useContainer = () => {
  const isMobileWidth = useMobileSizeDetect()
  const { isMobile } = useAppSelector(state => state.mobile)

  const { setIsMobile } = useActions(Actions)
  useEffect(() => {
    if (isMobileWidth !== isMobile) {
      setIsMobile(isMobileWidth)
    }
  }, [isMobile])
}
