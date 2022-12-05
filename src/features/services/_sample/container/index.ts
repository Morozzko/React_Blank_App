import { useEffect } from 'react'
import { useAppSelector } from '../../../../utils/hooks/useAppSelector'
import { useAppActions } from '../../../../utils/hooks/useAppActions'

export const useContainer = () => {
  useEffect(() => {}, [])

  const {} = useAppActions()
  const {} = useAppSelector(state => state._Sample)
}
