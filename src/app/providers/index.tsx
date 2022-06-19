import { MaterialUIProvider } from './MaterialUIProvider'
import { ReduxStoreProvider } from './ReduxStoreProvider'
import { SnackBarProvider } from './SnackBarProvider'

const Providers: FC = ({ children }) => {
  return (
    <ReduxStoreProvider>
      <SnackBarProvider>
        <MaterialUIProvider>{children}</MaterialUIProvider>
      </SnackBarProvider>
    </ReduxStoreProvider>
  )
}

export default Providers
