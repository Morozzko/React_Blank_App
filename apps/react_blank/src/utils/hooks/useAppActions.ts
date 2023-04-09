import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { ActionCreatorsMapObject, bindActionCreators } from 'redux'
import { AppDispatchType } from '@app/store/store'
import { condition } from '@services/condition'
import { mobile } from '@services/mobile'

// useAppDispatch - хук, который оборачивает стандартный хук useDispatch из react-redux.
// Он предоставляет функцию dispatch с определенным типом AppDispatchType, что облегчает работу с типами TypeScript
// и упрощает диспетчеризацию действий в Redux.
export const useAppDispatch = () => useDispatch<AppDispatchType>()

// useActions - хук, который принимает объект actions с типом ActionCreatorsMapObject.
// Он использует bindActionCreators из redux для связывания каждого действия с функцией dispatch из хука useAppDispatch.
// Результатом является объект, который содержит все действия, уже связанные с функцией dispatch, что позволяет легко использовать их в компонентах.
const useActions = <T extends ActionCreatorsMapObject>(actions: T) => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(actions, dispatch), [])
}

// useAppActions - хук, который использует useActions для создания объектов действий для различных сервисов.
// Затем он возвращает объект, содержащий все эти действия, сгруппированные по сервисам, что упрощает их использование в компонентах.
// Этот хук может быть расширен для включения дополнительных сервисов и виджетов. Хук используют useMemo для оптимизации производительности,
// что гарантирует, что объекты действий будут пересозданы только при изменении зависимостей.
// В данном случае зависимостей нет, поэтому объекты действий создаются только один раз при первом вызове хуков.
export const useAppActions = () => {
  // insert hook here
  const conditionActions = useActions(condition.Actions)
  const mobileActions = useActions(mobile.Actions)

  return useMemo(
    () => ({
      // insert actions here
      conditionActions,
      mobileActions,
    }),
    []
  )
}
