import AppStyle from './style'
import CRI from '../../../components/shared/lib/ContainerReconciliationIsolator'
import { condition } from '../../../features/services/condition'
import { mobile } from '../../../features/services/mobile'
import AppRouter from '../../router'
import '../../../styles/unselectable.css'
import '../../../features/services/localization'

const App: FC = () => {
  return (
    <AppStyle>
      <AppRouter />
      <CRI containers={[condition.useContainer, mobile.useContainer]} />
    </AppStyle>
  )
}

export default App
