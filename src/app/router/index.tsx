import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Routes as Components } from './routes'
import NotFound from '../../components/templates/404'

const AppRouter: FC = () => {
  return (
    <Routes>
      {Components.map(route => (
        <Route key={route.path} path={route.path} element={route.component} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter
