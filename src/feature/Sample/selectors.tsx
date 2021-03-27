import { createSelector } from 'reselect'
import {AppStateType} from "../../store/store";


const SelectUsers = (state:AppStateType) => state.th.users

