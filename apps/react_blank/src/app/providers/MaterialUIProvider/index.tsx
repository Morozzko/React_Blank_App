import { ThemeProvider, createTheme } from '@mui/material/'

export const MaterialUIProvider: FC = ({ children }) => {
  const theme = createTheme({
    palette: {
      // primary: {
      //   main: ColorsScheme.RaiffeisenWhite(),
      // },
      // secondary: {
      //   main: ColorsScheme.RaiffeisenBlack(),
      // },
    },
  })

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
