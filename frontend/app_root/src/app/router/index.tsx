import { Routes } from 'react-router-dom'
import { renderRoute } from './utils/render'
import { routeStructure } from './utils/structure'

export const AppRouter = () => (
  <Routes>{routeStructure.map(renderRoute)}</Routes>
)
