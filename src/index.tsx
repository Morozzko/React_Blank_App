import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app/entry'
import IE11 from './polyfills/ie11';

IE11.URLSearchParams(window);

const container = document.getElementById('root')

ReactDOM.render(<App.Container />, container)
