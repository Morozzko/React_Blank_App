import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { AppStateType } from '../../app/store/store'

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector
