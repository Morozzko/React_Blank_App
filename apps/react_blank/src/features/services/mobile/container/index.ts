import { useMobileSizeDetect } from '@npm.piece/utils'
import { useEffect } from 'react'
import { useAppActions } from '@hooks/useAppActions'
import { useAppSelector } from '@hooks/useAppSelector'

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
