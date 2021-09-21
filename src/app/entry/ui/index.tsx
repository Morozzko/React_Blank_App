import React, { FC } from 'react'
import AppStyle from './style'
import AppRouter from '../../router'
import { condition } from '../../../features/services/condition'
import CRI from '../../../components/shared/lib/ContainerReconciliationIsolator'

const App: FC = props => {
  return (
    <AppStyle>
      <AppRouter />
      <CRI containers={[condition.useContainer]} />
    </AppStyle>
  )
}

export default App
