import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app/entry'
import IE11 from './polyfills/ie11'

IE11.URLSearchParams(window)

const container = document.getElementById('root')

if (container) {
  const root = createRoot(container)
  root.render(<App.Container />)
}
