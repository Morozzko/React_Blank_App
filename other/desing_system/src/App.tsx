import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './app/router'
import './index.css'

export const App = () => (
  <BrowserRouter>
    <div>
      <AppRouter />
    </div>
  </BrowserRouter>
)
