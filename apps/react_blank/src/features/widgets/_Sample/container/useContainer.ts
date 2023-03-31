import { useEffect } from 'react'
import { useAppSelector } from '../../../../utils/hooks/useAppSelector'
import { UIPropertyType } from '../ui'
import { useAppActions } from '../../../../utils/hooks/useAppActions'

export const useContainer = (): UIPropertyType => {
  useEffect(() => {

  }, [])

  const {} = useAppActions()
  const {} = useAppSelector(state => state)

  return {}
}
