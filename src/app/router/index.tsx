import { Route, Routes } from 'react-router-dom'
import { v1 } from 'uuid'
import { Routes as Components } from './routes'
import NotFound from '../../components/templates/404'
import { RouterType } from '../entry/lib/types'

const GenerateRoute = (route: RouterType) => {
  if (route.child?.length) {
    return (
      <Route key={route.id || route.path || v1()} path={route.path} index={route.index} element={route.element}>
        {route.child.map(ele => GenerateRoute(ele))}
      </Route>
    )
  }
  return <Route key={route.id || route.path || v1()} {...route} />
}

const AppRouter: FC = () => {
  return (
    <Routes>
      {Components.map(route => GenerateRoute(route))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter
