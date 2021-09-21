import { createSelector } from 'reselect'
import { AppStateType } from '../../../../app/store/store'

const SelectUsers = (state: AppStateType) => state.Sample.sample
