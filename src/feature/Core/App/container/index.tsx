import React, { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../templates/App';
import Providers from '../../Providers';

const Container: FC = props => {
  return (
    <BrowserRouter>
      <Providers>
        <App {...props} />
      </Providers>
    </BrowserRouter>
  );
};

export default Container;
