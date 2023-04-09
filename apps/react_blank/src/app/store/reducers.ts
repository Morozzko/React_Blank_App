import { generatedReducersList } from '@app/store/generated/reducers'
import { condition } from '@services/condition'
import { mobile } from '@services/mobile'

export const reducersList = {
  // Services: Начало
  condition: condition.Reducer,
  mobile: mobile.Reducer,
  // Services: Конец

  // Widgets: Начало
  // Widgets: Конец

  // Auto Generated Reducers: Начало
  ...generatedReducersList,
  // Auto Generated Reducers: Конец
}
