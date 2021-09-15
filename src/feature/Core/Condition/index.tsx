import { asyncActions, slice } from './model'
import useContainer from './container/useContainer'

const Actions = {
  ...slice.actions,
  ...asyncActions,
}

const Reducer = slice.reducer

export const Condition = {
  Actions,
  useContainer,
  Reducer,
}
