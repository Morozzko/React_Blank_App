import {TypedUseSelectorHook, useSelector} from "react-redux";
import {AppStateType} from "../store/store";

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector