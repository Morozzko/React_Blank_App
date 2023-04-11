import { CustomServiceInjector } from '@npm.piece/utils'
import { AppRouter } from '@app/router'
import { condition } from '@services/condition'
import { mobile } from '@services/mobile'
import '@services/localization'

export const App: FC = () => (
  <div>
    <AppRouter />
    <CustomServiceInjector containers={[condition.useContainer, mobile.useContainer]} />
  </div>
)
