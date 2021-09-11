import React, { FC } from 'react'
import { SnackbarProvider } from 'notistack'

const SnackBarProvider: FC = props => {
  return <SnackbarProvider>{props.children}</SnackbarProvider>
}

export default SnackBarProvider
