import { useEffect } from 'react'
import { useAppSelector } from '../../../../utils/hooks/useAppSelector/useAppSelector'
import { useActions } from '../../../../utils/hooks/useActions/useActions'
import { Actions } from '../store'

export const useContainer = () => {
  useEffect(() => {}, [])

  const {} = useActions(Actions)
  const {} = useAppSelector(state => state.Sample)

  return null
}
