import { useEffect } from 'react'
import { useActions } from '../../../../utils/hooks/useActions'
import { useAppSelector } from '../../../../utils/hooks/useAppSelector'
import { Actions } from '../store'

export const useContainer = () => {
  useEffect(() => {}, [])

  const {} = useActions(Actions)
  const {} = useAppSelector(state => state._Sample)
}
