import { useEffect } from 'react'
import { useAppActions } from '@hooks/useAppActions'
import { useAppSelector } from '@hooks/useAppSelector'

export const useContainer = () => {
	useEffect(() => {}, [])

	const {} = useAppActions()
	const {} = useAppSelector(state => state)
}
