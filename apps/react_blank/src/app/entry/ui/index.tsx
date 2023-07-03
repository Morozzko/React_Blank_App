import { ServiceInjector } from '@npm.piece/utils'
import { AppRouter } from '@app/router'
import { appSize } from '@services/appSize'
import { condition } from '@services/condition'
import { ErrorBoundary } from '@utility-components/ErrorBoundary'

export const App: FC = () => (
  <>
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
    <ServiceInjector services={[condition.service, appSize.service]} />
  </>
)
