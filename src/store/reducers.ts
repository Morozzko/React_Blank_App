import { slice } from '../feature/Core/App/model';
import { Sample } from '../feature/Project/_Sample';
import { Condition } from '../feature/Core/Condition';

export const reducersList = {
  App: slice.reducer,
  Condition: Condition.Reducer,
  th: Sample.Reducer,
};
