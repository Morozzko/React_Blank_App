import { Sample } from '../../features/widgets/_Sample'
import { condition } from '../../features/services/condition'
import { sample } from '../../features/services/_sample'
import { mobile } from '../../features/services/mobile'
import { auth } from '../../features/services/auth'
import { Auth } from '../../features/widgets/Auth'

export const reducersList = {
  // Buttons
  _sample: sample.Reducer,
  _Sample: Sample.Reducer,
  // Buttons

  // Services
  auth: auth.Reducer,
  condition: condition.Reducer,
  mobile: mobile.Reducer,
  // Services

  // Widgets
  Auth: Auth.Reducer,
  // Widgets
}
