import { LazyExoticComponent, Suspense } from 'react'
import { Loading } from '@components/templates/Loading'

// const OtherComponent = lazy(() =>
//   import('../../../../components/templates/Loading').then(module => ({ default: module.Loading }))
// )

export const WithSuspense = (Component: LazyExoticComponent<FC>) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
)
