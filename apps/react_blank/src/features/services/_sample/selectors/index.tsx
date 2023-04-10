import { createSelector } from 'reselect'
import { AppStateType } from '@app/store/store'

const SelectOne = (state: AppStateType) => state
const SelectTwo = (state: AppStateType) => state

const sample = createSelector(SelectOne, SelectTwo, (one, two) => ({
  one,
  two,
}))
