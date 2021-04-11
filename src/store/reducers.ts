import {slice} from "../feature/App/reducer/reducer";
import {Sample} from "../feature/Sample";

export const reducersList = {
    App: slice.reducer,
    th: Sample.Reducer
};