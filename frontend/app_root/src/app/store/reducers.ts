import { generatedReducersList } from '@app/store/generated/reducers'
import { Reducer as appSize } from '@services/appSize'
import { Reducer as theme } from '@services/theme'

export const reducersList = {
  // Services: Начало
  theme,
  appSize,
  // Services: Конец

  // Widgets: Начало
  // Widgets: Конец

  // Auto Generated Reducers: Начало
  ...generatedReducersList,
  // Auto Generated Reducers: Конец
}
