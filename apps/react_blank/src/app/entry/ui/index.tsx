import { AppRouter } from '@app/router'
import { CustomContainerInjector } from '@helpers/CustomContainerInjector'
import { condition } from '@services/condition'
import { mobile } from '@services/mobile'
import { AppStyle } from './style'
import '../../../styles/unselectable.css'
import '@services/localization'

export const App: FC = () => (
  <AppStyle>
    <AppRouter />
    <CustomContainerInjector containers={[condition.useContainer, mobile.useContainer]} />
  </AppStyle>
)
