import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from '../../../styles/GlobalStyle'
import { Providers } from '../../providers'
import { App } from '../ui'

export const Container: FC = props => (
  <BrowserRouter>
    <Providers>
      <App {...props} />
      <GlobalStyle />
    </Providers>
  </BrowserRouter>
)

export const ImportedContainer: FC = props => (
  <Providers>
    <App {...props} />
    <GlobalStyle />
  </Providers>
)
