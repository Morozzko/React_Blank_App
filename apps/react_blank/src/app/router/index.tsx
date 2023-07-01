import { Route, Routes } from 'react-router-dom'
import { NotFound } from '@components/templates/404'
import { Todo } from '@pages/index'

export const AppRouter: FC = () => (
  <Routes>
    <Route path="/">
      <Route index element={<Todo />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
)
