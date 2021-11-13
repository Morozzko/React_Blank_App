import React, { FC } from 'react';
import AppStyle from './style';
import AppRouter from '../../router';
import { condition } from '../../../features/services/condition';
import CRI from '../../../components/shared/lib/ContainerReconciliationIsolator';
import '../../../styles/unselectable.css';
import '../../../features/services/localization';
import { mobile } from '../../../features/services/mobile';

const App: FC = props => {
  return (
    <AppStyle>
      <AppRouter />
      <CRI containers={[
        condition.useContainer,
      mobile.useContainer
      ]} />
    </AppStyle>
  )
}

export default App
