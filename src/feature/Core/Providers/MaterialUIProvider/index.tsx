import React, { FC } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const MaterialUIProvider: FC = props => {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#ff0000',
      },
      secondary: {
        main: '#2f2f2f',
      },
    },
  });
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default MaterialUIProvider;
