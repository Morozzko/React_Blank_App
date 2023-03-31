import { useEffect } from 'react'
import { useAppActions } from '../../../../utils/hooks/useAppActions'
import { useAppSelector } from '../../../../utils/hooks/useAppSelector'
import { UIPropertyType } from '../ui'

export const useContainer = (): UIPropertyType => {
  useEffect(() => {}, [])

  const {} = useAppActions()
  const {} = useAppSelector(state => state)

  return {}
}
