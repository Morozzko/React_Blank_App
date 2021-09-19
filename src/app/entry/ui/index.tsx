import React, { FC } from 'react';
import AppStyle from './style';
import AppRouter from '../../router';
import { Condition } from '../../../features/Services/Condition';
import CRI from '../../../components/shared/lib/ContainerReconciliationIsolator';

const App: FC = props => {

  return (
    <AppStyle>
      <AppRouter />
      <CRI containers={[
        Condition.useContainer
      ]} />
    </AppStyle>
  );
};

export default App;
