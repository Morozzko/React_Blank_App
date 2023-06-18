import { useEffect } from 'react'
import { useAppActions } from '@hooks/useAppActions'
import { useAppSelector } from '@hooks/useAppSelector'
import { UIPropertyType } from '../ui'

export const useContainer: CC<UIPropertyType> = () => {
  useEffect(() => {}, [])

  const {} = useAppActions()
  const {} = useAppSelector(state => state)

  return {}
}
