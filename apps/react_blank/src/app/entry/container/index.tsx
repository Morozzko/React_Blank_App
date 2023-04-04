import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Providers } from '@app/providers'
import { App } from '../ui'
import '../../../index.css'

export const Container: FC = props => (
  <BrowserRouter>
    <Providers>
      <App {...props} />
    </Providers>
  </BrowserRouter>
)

export const ImportedContainer: FC = props => (
  <Providers>
    <App {...props} />
  </Providers>
)
