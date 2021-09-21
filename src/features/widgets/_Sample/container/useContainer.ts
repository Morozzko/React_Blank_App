import { useEffect } from 'react'
import { UIPropertyType } from '../ui'
import { useAppSelector } from '../../../../utils/hooks/useAppSelector'
import { useActions } from '../../../../utils/hooks/useActions'
import { sample } from '../../../services/_sample'

export const useContainer = () => {
  useEffect(() => {}, [])

  const {} = useActions(sample.Actions)
  const {} = useAppSelector(state => state._sample)
  const data: UIPropertyType = {}
  return data
}
