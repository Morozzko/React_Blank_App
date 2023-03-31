import { useMemo } from 'react'
import { useActions } from './useActions'
import { condition } from '../../features/services/condition'
import { mobile } from '../../features/services/mobile'

// useAppActions - это пользовательский хук, который использует useActions для создания объектов действий для различных сервисов. Затем он возвращает объект, содержащий все эти действия, сгруппированные по сервисам, что упрощает их использование в компонентах. Этот хук может быть расширен для включения дополнительных сервисов и виджетов. Хук используют useMemo для оптимизации производительности, что гарантирует, что объекты действий будут пересозданы только при изменении зависимостей. В данном случае зависимостей нет, поэтому объекты действий создаются только один раз при первом вызове хуков.
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
