import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from '@components/templates/404'
import { Layouts } from '@layouts/index'

const Main = lazy(() =>
  import('@pages/MainForm').then(module => ({
    default: module.Page,
  }))
)

const publicPath = process.env.REACT_APP_PUBLIC_PATH
export const format = (url: string) => url.replaceAll('//', '/')
export const AppRouter: FC = () => (
  <Routes>
    <Route path={format(`${publicPath}`)} element={<Layouts.Main />}>
      <Route index element={<Main />} />
    </Route>

    <Route path="*" element={<NotFound />} />
  </Routes>
)
