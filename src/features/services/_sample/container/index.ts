import { useEffect } from 'react'
import { Actions } from '../store'
import { useActions } from '../../../../utils/hooks/useActions'
import { useAppSelector } from '../../../../utils/hooks/useAppSelector'

export const useContainer = () => {
  useEffect(() => {}, [])

  const {} = useActions(Actions)
  const {} = useAppSelector(state => state._Sample)

}
