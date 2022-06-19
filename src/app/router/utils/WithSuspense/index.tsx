import React, { LazyExoticComponent, Suspense } from 'react'
import Loading from '../../../../components/templates/Loading'

export const WithSuspense = (Component: LazyExoticComponent<() => JSX.Element>) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
)
