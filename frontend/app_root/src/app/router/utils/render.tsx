import { ComponentType } from 'react'
import { Route } from 'react-router-dom'

export type RouteConfigType = {
  path: string
  element: ComponentType
  layout?: ComponentType
  children?: RouteConfigType[]
}

/**
 * Форматирует URL, заменяя двойные слэши на одинарные.
 * @param {string} url - URL для форматирования.
 * @returns {string} Отформатированный URL.
 */
export const format = (url: string) => url.replaceAll('//', '/')

/**
 * Отрисовывает маршрут на основе предоставленной конфигурации.
 * @param {RouteConfig} route - Объект конфигурации маршрута.
 * @returns {ReactElement} Отрендеренный элемент Route.
 */
export const renderRoute = (route: RouteConfigType) => {
  const Element = route.element
  const Layout = route.layout

  if (Layout) {
    return (
      <Route key={route.path} path={format(route.path)} element={<Layout />}>
        <Route index element={<Element />} />
      </Route>
    )
  }

  return (
    <Route key={route.path} path={format(route.path)} element={<Element />}>
      {route.children?.map(renderRoute)}
    </Route>
  )
}
