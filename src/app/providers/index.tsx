import React, { FC } from 'react'
import MaterialUIProvider from './MaterialUIProvider'
import ReduxStoreProvider from './ReduxStoreProvider'
import SnackBarProvider from './SnackBarProvider'

const Providers: FC = props => {
  return (
    <ReduxStoreProvider>
      <SnackBarProvider>
        <MaterialUIProvider>{props.children}</MaterialUIProvider>
      </SnackBarProvider>
    </ReduxStoreProvider>
  )
}

export default Providers
