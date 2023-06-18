import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { ActionCreatorsMapObject, bindActionCreators } from 'redux'
import { AppDispatchType } from '@app/store/store'
import { Actions as appSize } from '@services/appSize/'
import { Actions as condition } from '@services/condition/'

// useAppDispatch - хук, который оборачивает стандартный хук useDispatch из react-redux.
// Он предоставляет функцию dispatch с определенным типом AppDispatchType, что облегчает работу с типами TypeScript
// и упрощает диспетчеризацию действий в Redux.
export const useAppDispatch = () => useDispatch<AppDispatchType>()

// useActions - хук, который принимает объект actions с типом ActionCreatorsMapObject.
// Он использует bindActionCreators из redux для связывания каждого действия с функцией dispatch из хука useAppDispatch.
// Результатом является объект, который содержит все действия, уже связанные с функцией dispatch,
// что позволяет легко использовать их в компонентах.
const useActions = <T extends ActionCreatorsMapObject>(actions: T) => {
  const dispatch = useAppDispatch()

  return useMemo(() => bindActionCreators(actions, dispatch), [])
}

// useAppActions - этот хук использует useActions для создания объектов действий для различных сервисов.
// Затем он возвращает объект, содержащий все эти действия, сгруппированные по сервисам, что упрощает их использование
// в компонентах. Этот хук может быть расширен для включения дополнительных действий из сервисов и виджетов.
// Хук использует useMemo для оптимизации производительности, что гарантирует, что объекты действий не будут пересозданы.

// Если в будущем вы захотите заменить Redux на другую библиотеку для управления состоянием, например Jotai или Zustand,
// вам нужно будет изменить реализацию только в этом хуке. После замены реализации на новую библиотеку, все компоненты,
// которые используют useAppActions, продолжат работать корректно, так как они будут использовать адаптированный
// хук с новой реализацией.
export const useAppActions = () => {
  // insert hook here
  const appSizeActions = useActions(appSize)
  const conditionActions = useActions(condition)

  return useMemo(
    () => ({
      // insert actions here
      appSizeActions,
      conditionActions,
    }),
    []
  )
}
