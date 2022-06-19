import { ReduxStoreProvider } from './ReduxStoreProvider'
import { SnackBarProvider } from './SnackBarProvider'
import { MaterialUIProvider } from './MaterialUIProvider'

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
