import { CustomServiceInjector } from '@npm.piece/utils'
import { AppRouter } from '@app/router'
import { appSize } from '@services/appSize'
import { condition } from '@services/condition'

import '@services/localization'

export const App: FC = () => (
  <div>
    <AppRouter />
    <CustomServiceInjector
      containers={[condition.useContainer, appSize.useContainer]}
    />
  </div>
)
