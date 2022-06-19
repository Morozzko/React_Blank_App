import { RouterComponentType } from '../entry/lib/types'
import NotFound from '../../components/templates/404'
import React, { lazy } from 'react'
import { Page } from '../../pages'
import { WithSuspense } from './utils/WithSuspense'

const LazyComponent = lazy(() => import('../../components/templates/404'))

export const Routes: RouterComponentType[] = [
  {
    path: '/',
    component: <Page.TodoPage />,
  },
  {
    path: '/suspense',
    component: WithSuspense(LazyComponent),
  },
  {
    path: '/NotFound',
    component: <NotFound />,
  },
]
