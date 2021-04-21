import {useDispatch} from "react-redux";
import {AppDispatchType} from "../../store/store";

export const useAppDispatch = () => useDispatch<AppDispatchType>();