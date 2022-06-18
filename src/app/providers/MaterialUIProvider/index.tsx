import { ThemeProvider } from '@mui/material'
import ColorsScheme from '../../../styles/ColorsScheme'
import { createTheme } from '@mui/material/styles'

export const MaterialUIProvider: FC = ({children}) => {
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
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
