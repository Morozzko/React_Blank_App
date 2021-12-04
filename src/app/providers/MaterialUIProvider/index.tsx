import React, { FC } from 'react'
import { ThemeProvider } from '@mui/material'
import ColorsScheme from '../../../styles/ColorsScheme'
import { createTheme } from '@mui/material/styles'

const MaterialUIProvider: FC = props => {
  const theme = createTheme({
    palette: {
      primary: {
        main: ColorsScheme.RaiffeisenWhite(),
      },
      secondary: {
        main: ColorsScheme.RaiffeisenBlack(),
      },
    },
  })
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

export default MaterialUIProvider
