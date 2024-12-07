import { lazy } from 'react'

// insert page imports here

export const Auth = lazy(() =>
  import('@pages/Auth').then(module => ({
    default: module.Page,
  }))
)

export const Main = lazy(() =>
  import('@pages/Main').then(module => ({
    default: module.Page,
  }))
)
