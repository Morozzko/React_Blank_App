import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from '@components/templates/404'
import { RoutesEnum } from '@constants/routes'
import { Layouts } from '@layouts/index'

const Auth = lazy(() =>
  import('@pages/Auth').then(module => ({
    default: module.Page,
  }))
)
// insert page imports here

const rootPublicPath = process.env.REACT_APP_ROOT_PUBLIC_PATH

const mf = {
  root: process.env.REACT_APP_ROOT_PUBLIC_PATH,
  auth: process.env.REACT_APP_MF_APP_AUTH_PUBLIC_PATH,
  dashboards: process.env.REACT_APP_MF_APP_DASHBOARD_PUBLIC_PATH,
  card: process.env.REACT_APP_MF_APP_CARD_PUBLIC_PATH,
  registry: process.env.REACT_APP_MF_APP_REGISTRY_PUBLIC_PATH,
}

const format = (url: string) => url.replaceAll('//', '/')
export const AppRouter: FC = () => (
  <Routes>
    <Route path={rootPublicPath} element={<Layouts.Main />} />

    <Route path={format(`${rootPublicPath}${mf.auth}${RoutesEnum.auth}*`)}>
      <Route path="*" element={<Auth />} />
    </Route>

    {/* <Route*/}
    {/*  path={format(`${rootPublicPath}${mf.card}${RoutesEnum.card}*`)}*/}
    {/*  element={<Layouts.Main />}>*/}
    {/*  <Route path="*" element={<Card />} />*/}
    {/* </Route>*/}

    {/* <Route*/}
    {/*  path={format(`${rootPublicPath}${mf.registry}${RoutesEnum.registry}*`)}*/}
    {/*  element={<Layouts.Main />}>*/}
    {/*  <Route path="*" element={<Registry />} />*/}
    {/* </Route>*/}

    <Route path="*" element={<Layouts.Main />}>
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
)
