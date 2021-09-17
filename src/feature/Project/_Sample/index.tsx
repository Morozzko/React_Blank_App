import { asyncActions, slice } from './model'
import * as Selectors from './selectors'
import Container from './container'
import { RestAPI } from './Api';
import { useContainer } from './container/useContainer';

const Actions = {
  ...slice.actions,
  ...asyncActions,
}
const Reducer = slice.reducer

export const Sample = {
  Actions,
  Container,
  RestAPI,
  useContainer,
  Selectors,
  Reducer,
}
