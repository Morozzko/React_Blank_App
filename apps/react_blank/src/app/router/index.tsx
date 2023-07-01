import { Route, Routes } from 'react-router-dom'
import { NotFound } from '@components/templates/404'
import { Constants } from '@constants/index'
import { RoutesEnum } from '@constants/routes'
import { Layouts } from '@layouts/index'
import { SimplePage } from '@pages/index'

export const AppRouter: FC = () => (
  <Routes>
    <Route path={RoutesEnum.main} element={<Layouts.Main />}>
      <Route index element={<SimplePage />} />
    </Route>

    <Route path={RoutesEnum.admin} element={<Layouts.Secondary />}>
      <Route index element={<div>1</div>} />
      <Route path={Constants.routes.banned} element={<div>2</div>} />
    </Route>

    <Route path="*" element={<NotFound />} />
  </Routes>
)
