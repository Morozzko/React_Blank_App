import { Routes } from 'react-router-dom'
import { routeStructure } from './structure'
import { renderRoute } from './utils/render'

export const AppRouter = () => (
  <Routes>{routeStructure.map(renderRoute)}</Routes>
)
