import {asyncActions, slice} from "./reducer/reducer";
import * as Selectors from "./selectors";
import Container from "./container";


const Actions = {
    ...slice.actions,
    ...asyncActions
};
const Reducer = slice.reducer

export const Sample={
    Actions,
    Container,
    Selectors,
    Reducer
}