import {useCallback, useMemo} from "react";
import {debounce} from 'lodash'
import {AppDispatchType, AppStateType} from "../store/store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {ActionCreatorsMapObject, bindActionCreators} from "redux";


//const log = useDebounce((params) => console.log(params), 1000);
export const useDebounce = (callback: (params?: any) => any, delay: number) => useCallback(debounce((...args) => callback(...args), delay), [delay]);


export const useAppDispatch = () => useDispatch<AppDispatchType>();

export function useActions<T extends ActionCreatorsMapObject>(actions: T) {
    const dispatch = useAppDispatch();
    return useMemo(() => bindActionCreators(actions, dispatch), []);
}

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector