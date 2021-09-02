import { asyncActions, slice } from './model';
import Container from './container';

const Actions = {
  ...slice.actions,
  ...asyncActions,
};

const Reducer = slice.reducer;

export const Condition = {
  Actions,
  Container,
  Reducer,
};
