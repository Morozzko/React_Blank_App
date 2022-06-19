import { useEffect } from 'react'
import { useActions } from '../../../../utils/hooks/useActions'
import { useAppSelector } from '../../../../utils/hooks/useAppSelector'
import { sample } from '../../../services/_sample'
import { UIPropertyType } from '../ui'

export const useContainer = (): UIPropertyType => {
  useEffect(() => {}, [])

  const {} = useActions(sample.Actions)
  const {} = useAppSelector(state => state._sample)

  return {}
}
