import { Suspense } from 'react'
import { Flex } from '@npm.piece/ui-kit'
import { Outlet } from 'react-router-dom'
import { Loading } from '@components/templates/Loading'

export const Main: FC = () => (
  <Flex column className="h-screen max-h-screen">
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  </Flex>
)
