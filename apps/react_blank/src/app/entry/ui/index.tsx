import { ServiceInjector } from '@npm.piece/utils'
import { AppRouter } from '@app/router'
import { appSize } from '@services/appSize'
import { condition } from '@services/condition'

import 'app/localization'

export const App: FC = () => (
  <div>
    <AppRouter />
    <ServiceInjector services={[condition.service, appSize.service]} />
  </div>
)
