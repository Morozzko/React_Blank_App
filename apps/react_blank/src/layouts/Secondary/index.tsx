import { Outlet } from 'react-router-dom'
export const Secondary: FC = () => (
  <div className="flex min-h-screen flex-col">
    <Outlet />
  </div>
)
