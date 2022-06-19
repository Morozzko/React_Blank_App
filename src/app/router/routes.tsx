import React, { lazy } from 'react'
import { WithSuspense } from './utils/WithSuspense'
import NotFound from '../../components/templates/404'
import { Page } from '../../pages'
import { RouterComponentType } from '../entry/lib/types'

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
