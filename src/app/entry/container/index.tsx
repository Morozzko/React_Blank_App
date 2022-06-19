import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from '../ui'
import Providers from '../../providers'
import { GlobalStyle } from '../../../styles/GlobalStyle'

export const Container: FC = props => {
  return (
    <BrowserRouter>
      <Providers>
        <App {...props} />
        <GlobalStyle />
      </Providers>
    </BrowserRouter>
  )
}

export const ImportedContainer: FC = props => {
  return (
    <Providers>
      <App {...props} />
      <GlobalStyle />
    </Providers>
  )
}
