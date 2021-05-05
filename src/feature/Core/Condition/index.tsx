import {asyncActions, slice} from "./reducer/reducer";
import Container from "./container";


const Actions = {
    ...slice.actions,
    ...asyncActions
};
const Reducer = slice.reducer

export const Condition={
    Actions,
    Container,
    Reducer
}