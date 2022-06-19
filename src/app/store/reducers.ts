import { Sample } from '../../features/widgets/_Sample'
import { condition } from '../../features/services/condition'
import { sample } from '../../features/services/_sample'
import { mobile } from '../../features/services/mobile'

export const reducersList = {
  // Buttons
  _sample: sample.Reducer,
  _Sample: Sample.Reducer,
  // Buttons

  // Services
  condition: condition.Reducer,
  mobile: mobile.Reducer,
  // Services

  // Widgets
  // Widgets
}
