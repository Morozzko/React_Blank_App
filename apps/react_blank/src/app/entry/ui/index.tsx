import { ServiceInjector } from '@npm.piece/utils'
import { AppRouter } from '@app/router'
import { appSize } from '@services/appSize'
import { condition } from '@services/condition'
import { ErrorBoundary } from '@utility-components/ErrorBoundary'

import 'app/localization'

export const App: FC = () => (
  <div>
    <ErrorBoundary>
      <AppRouter />
    </ErrorBoundary>
    <ServiceInjector services={[condition.service, appSize.service]} />
  </div>
)
