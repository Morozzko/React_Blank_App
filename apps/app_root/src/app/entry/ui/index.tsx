import { ErrorBoundary, ServiceInjector } from '@npm.piece/utils'
import { AppRouter } from '@app/router'
import { appSize } from '@services/appSize'
import { logs } from '@services/logs'
import { theme } from '@services/theme'

export const App: FC = () => (
  <>
    <ErrorBoundary errorComponent={<h1>error</h1>}>
      <AppRouter />
    </ErrorBoundary>
    <ServiceInjector
      services={[appSize.service, logs.service, theme.service]}
    />
  </>
)
