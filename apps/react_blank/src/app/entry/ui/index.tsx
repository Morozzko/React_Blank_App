import { CustomContainerInjector } from '@npm.piece/utils'
import { AppRouter } from '@app/router'
import { condition } from '@services/condition'
import { mobile } from '@services/mobile'
import '@services/localization'

export const App: FC = () => (
  <div>
    <AppRouter />
    <CustomContainerInjector containers={[condition.useContainer, mobile.useContainer]} />
  </div>
)
