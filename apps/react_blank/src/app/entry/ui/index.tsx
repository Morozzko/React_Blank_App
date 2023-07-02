import { ServiceInjector } from '@npm.piece/utils'
import { ErrorBoundary } from '@utility-components/ErrorBoundary'
import { AppRouter } from '@app/router'
import { appSize } from '@services/appSize'
import { condition } from '@services/condition'

export const App: FC = () => (
  <>
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
    <ServiceInjector services={[condition.service, appSize.service]} />
  </>
)
