import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Loading } from '../../components/Loading'
export const Main: FC = () => (
  <div className="flex min-h-screen flex-col">
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  </div>
)
