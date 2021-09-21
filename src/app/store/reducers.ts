import { Sample } from '../../features/widgets/_Sample'
import { condition } from '../../features/services/condition'
import { sample } from '../../features/services/_sample'

export const reducersList = {
  _sample: sample.Reducer,
  _Sample: Sample.Reducer,
  condition: condition.Reducer,
}
