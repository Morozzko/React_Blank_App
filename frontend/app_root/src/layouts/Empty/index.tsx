import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Loading } from '@components/templates/Loading'

export const Empty: FC = () => (
  <Suspense fallback={<Loading />}>
    <Outlet />
  </Suspense>
)
