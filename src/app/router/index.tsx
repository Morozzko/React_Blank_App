import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Routes as Components } from './routes'

const AppRouter: FC = () => {
  return (
    <Routes>
      {Components.map(route => (
        //@ts-ignore
        <Route key={route.path} path={route.path} element={ route.component} />
      ))}
    </Routes>
  )
}

export default AppRouter
