import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../ui';
import Providers from '../../Providers';
import GlobalStyle from '../../../../styles/GlobalStyle';

const Container: FC = props => {
  return (
    <BrowserRouter>
      <Providers>
        <GlobalStyle/>
        <App {...props} />
      </Providers>
    </BrowserRouter>
  );
};

export default Container;
