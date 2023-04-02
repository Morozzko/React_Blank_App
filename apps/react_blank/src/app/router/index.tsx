import { Route, Routes } from 'react-router-dom'
import { Page } from '@pages/index'
import { NotFound } from '../../components/templates/404'

export const AppRouter: FC = () => (
  <Routes>
    <Route path="/">
      <Route index element={<Page.TodoPage />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
)
