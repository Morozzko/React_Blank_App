import {slice} from "../feature/Core/App/reducer/reducer";
import {Sample} from "../feature/Project/Sample";
import {Condition} from "../feature/Core/Condition";

export const reducersList = {
    App: slice.reducer,
    Condition:Condition.Reducer,
    th: Sample.Reducer
};