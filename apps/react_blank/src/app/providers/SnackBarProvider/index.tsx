import { SnackbarProvider } from 'notistack'

export const SnackBarProvider: FC = ({ children }) => (
	<SnackbarProvider>{children}</SnackbarProvider>
)
