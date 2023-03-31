import { useMemo } from 'react'
import { ActionCreatorsMapObject, bindActionCreators } from 'redux'
import { useAppDispatch } from './useAppDispatch'

// useActions - это пользовательский хук, который принимает объект actions с типом ActionCreatorsMapObject. Он использует bindActionCreators из redux для связывания каждого действия с функцией dispatch из хука useAppDispatch. Результатом является объект, который содержит все действия, уже связанные с функцией dispatch, что позволяет легко использовать их в компонентах.
export function useActions<T extends ActionCreatorsMapObject>(actions: T) {
  const dispatch = useAppDispatch()
  return useMemo(() => bindActionCreators(actions, dispatch), [])
}
