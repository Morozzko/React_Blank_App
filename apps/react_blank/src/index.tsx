import { createRoot } from 'react-dom/client'
import { App } from './app/entry'

const container = document.getElementById('root')

const root = createRoot(container as HTMLDivElement)

root.render(<App.Container />)
