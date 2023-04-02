import { sample } from '@services/_sample'
import { condition } from '@services/condition'
import { mobile } from '@services/mobile'
import { Sample } from '@widgets/_Sample'

export const reducersList = {
  // Sample
  _sample: sample.Reducer,
  _Sample: Sample.Reducer,
  // Sample

  // Services
  condition: condition.Reducer,
  mobile: mobile.Reducer,
  // Services

  // Widgets
  // Widgets
}
