import { MaterialUIProvider } from './MaterialUIProvider'
import { ReduxStoreProvider } from './ReduxStoreProvider'
import { SnackBarProvider } from './SnackBarProvider'

export const Providers: FC = ({ children }) => (
	<ReduxStoreProvider>
		<SnackBarProvider>
			<MaterialUIProvider>{children}</MaterialUIProvider>
		</SnackBarProvider>
	</ReduxStoreProvider>
)
