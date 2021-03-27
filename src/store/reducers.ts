import {slice} from "../feature/App/reducer/reducer";
import {Sample} from "../feature/Sample";
import {InferActionsTypes} from "./store";

export const reducersList = {
    App: slice.reducer,
    th: Sample.Reducer
};