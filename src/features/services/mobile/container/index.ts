import { useMobileSizeDetect } from '@npm.piece/hooks'
import { useEffect } from 'react'
import { useAppActions } from '../../../../utils/hooks/useAppActions'
import { useAppSelector } from '../../../../utils/hooks/useAppSelector'

export const useContainer = () => {
  const isMobileWidth = useMobileSizeDetect()
  const { isMobile } = useAppSelector(state => state.mobile)

  const {
    mobileActions: { setIsMobile },
  } = useAppActions()

  useEffect(() => {
    if (isMobileWidth !== isMobile) {
      setIsMobile(isMobileWidth)
    }
  }, [isMobile])
}
