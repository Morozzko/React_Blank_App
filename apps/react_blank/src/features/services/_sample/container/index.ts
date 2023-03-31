import { useEffect } from 'react'
import { useAppActions } from '../../../../utils/hooks/useAppActions'
import { useAppSelector } from '../../../../utils/hooks/useAppSelector'

export const useContainer = () => {
  useEffect(() => {}, [])

  const {} = useAppActions()
  const {} = useAppSelector(state => state._Sample)
}
