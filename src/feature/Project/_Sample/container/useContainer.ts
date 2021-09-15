import { useActions } from '../../../../utils/hooks/useActions'
import { localActions } from '../model'
import { useAppSelector } from '../../../../utils/hooks/useAppSelector'
import { useEffect } from 'react'

export const useContainer = () => {
  useEffect(() => {}, [])

  const {} = useActions(localActions)
  const {} = useAppSelector(state => state._Sample)

  return {}
}
