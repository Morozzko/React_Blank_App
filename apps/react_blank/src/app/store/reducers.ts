import { generatedReducersList } from '@app/store/generated/reducers'
import { Reducer as appSize } from '@services/appSize'
import { Reducer as condition } from '@services/condition'

export const reducersList = {
  // Services: Начало
  appSize,
  condition,
  // Services: Конец

  // Widgets: Начало
  // Widgets: Конец

  // Auto Generated Reducers: Начало
  ...generatedReducersList,
  // Auto Generated Reducers: Конец
}
