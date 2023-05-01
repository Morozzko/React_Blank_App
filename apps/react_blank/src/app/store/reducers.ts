import { generatedReducersList } from '@app/store/generated/reducers'
import { Reducer as condition } from '@services/condition'
import { Reducer as mobile } from '@services/mobile'

export const reducersList = {
	// Services: Начало
	condition,
	mobile,
	// Services: Конец

	// Widgets: Начало
	// Widgets: Конец

	// Auto Generated Reducers: Начало
	...generatedReducersList,
	// Auto Generated Reducers: Конец
}
