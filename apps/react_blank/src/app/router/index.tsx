import { Route, Routes } from 'react-router-dom'
import { NotFound } from '@components/templates/404'
import { SimplePage } from '@pages/index'

export const AppRouter: FC = () => (
  <Routes>
    <Route path="/">
      <Route index element={<SimplePage />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
)
