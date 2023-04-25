import { ThemeProvider, createTheme } from '@mui/material/'

export const MaterialUIProvider: FC = ({ children }) => {
  const theme = createTheme({
    palette: {
      // primary: {
      //   main: "black",
      // },
      // secondary: {
      //   main: "white",
      // },
    },
  })

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
