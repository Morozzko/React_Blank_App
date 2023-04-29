import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { AppStateType } from '@app/store/store'

// Хук useAppSelector является типизированным адаптером для стандартного хука useSelector из библиотеки react-redux.
// Этот хук обеспечивает привязку к типу состояния вашего приложения, указанному в AppStateType, что облегчает работу с типами TypeScript
// и упрощает извлечение данных из хранилища Redux.
//
// Если в будущем вы захотите заменить Redux на другую библиотеку для управления состоянием, например MobX или Zustand,
// вам нужно будет изменить реализацию только в этом хуке.
// После замены реализации на новую библиотеку, все компоненты, которые используют useAppSelector, продолжат работать корректно,
// так как они будут использовать адаптированный хук с новой реализацией.
//
// Таким образом, useAppSelector служит удобным адаптером между вашими компонентами и библиотекой управления состоянием,
// обеспечивая гибкость и абстракцию от конкретной реализации.
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector
