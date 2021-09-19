import { Actions, Reducer } from './model/store';
import * as Selectors from './model/selectors';
import Container from './ui';
import RestAPI from './model/api';
import { useContainer } from './ui/container';


export const Sample = {
  Actions,
  Container,
  RestAPI,
  useContainer,
  Selectors,
  Reducer
};