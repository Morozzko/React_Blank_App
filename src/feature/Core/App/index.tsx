import { slice } from './model';
import Container from './container';

const Actions = {
  ...slice.actions,
}
const Reducer = slice.reducer

export const App = {
  Actions,
  Container,
  Reducer,
}
