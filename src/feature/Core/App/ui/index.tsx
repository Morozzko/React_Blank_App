import React, { FC } from 'react';
import { AppStyle } from './style';
import AppRouter from '../../Router';
import { Condition } from '../../Condition';

const App: FC = props => {

  Condition.useContainer();

  return (
    <AppStyle>
      <AppRouter />
    </AppStyle>
  );
};

export default App;
