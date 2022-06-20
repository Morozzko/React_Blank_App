import React, { lazy } from 'react'
import { WithSuspense } from './utils/WithSuspense'
import NotFound from '../../components/templates/404'
import { Page } from '../../pages'
import { RouterType } from '../entry/lib/types'

const LazyComponent = lazy(() => import('../../components/templates/404'))

export const Routes: RouterType[] = [
  {
    path: '/',
    child: [
      {
        index: true,
        element: <Page.TodoPage />,
      },
      {
        path: '2',
        child: [
          {
            index: true,
            element: <p>sd3</p>,
          },
          {
            path: '2',
            element: <p>sd4</p>,
          },
        ],
      },
    ],
  },
  {
    path: '/suspense',
    element: WithSuspense(LazyComponent),
  },
  {
    path: '/NotFound',
    element: <NotFound />,
  },
]
