import { useSizeDetect } from '@npm.piece/utils'
import { useEffect } from 'react'
import { useAppActions } from '@hooks/useAppActions'
import { useAppSelector } from '@hooks/useAppSelector'

export const useContainer = () => {
	const { innerWidth, innerHeight, clientWidth, clientHeight } = useSizeDetect()
	const { isMobile } = useAppSelector(state => state.mobile)
	const isMobileWidth = Boolean(innerWidth <= 768)

	const {
		mobileActions: { setIsMobile, setAppSize },
	} = useAppActions()

	useEffect(() => {
		if (isMobileWidth !== isMobile) {
			setIsMobile(isMobileWidth)
		}
	}, [isMobile])

	useEffect(() => {
		setAppSize({
			clientHeight,
			clientWidth,
			innerHeight,
			innerWidth,
		})
	}, [clientHeight, clientWidth, innerHeight, innerWidth])
}
