import { sample } from '../../features/services/_sample'
import { condition } from '../../features/services/condition'
import { mobile } from '../../features/services/mobile'
import { Sample } from '../../features/widgets/_Sample'

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
