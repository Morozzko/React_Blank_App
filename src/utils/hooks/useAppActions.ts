import { useMemo } from 'react'
import { useActions } from './useActions'
import { condition } from '../../features/services/condition'
import { mobile } from '../../features/services/mobile'


export const useAppActions = () => {
  // Services
  const conditionActions = useActions(condition.Actions)
  const mobileActions = useActions(mobile.Actions)
  // Service

  // Widgets
  // Widgets

  return useMemo(
    () => ({
      conditionActions,
      mobileActions
    }),
    []
  )
}
