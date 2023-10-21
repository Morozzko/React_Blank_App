import { Route, Routes } from 'react-router-dom'

import { NotFound } from '../../components/NotFound'
import { RoutesEnum } from '../../constants/routes'
import { Layouts } from '../../layouts'
import { TypographyPage } from '../../pages/Typography'

// const Simple = lazy(() =>
//   import('@pages/Simple').then(module => ({
//     default: module.Page,
//   }))
// )

export const AppRouter: FC = () => (
  <Routes>
    <Route path={RoutesEnum.main} element={<Layouts.Main />}>
      <Route index element={<TypographyPage />} />
    </Route>

    <Route path="*" element={<NotFound />} />
  </Routes>
)
