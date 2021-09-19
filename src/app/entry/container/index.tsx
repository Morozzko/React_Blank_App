import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from '../ui'
import Providers from '../../providers'
import GlobalStyle from '../../../styles/GlobalStyle'

const Container: FC = props => {
  return (
    <BrowserRouter>
      <Providers>
        <App {...props} />
        <GlobalStyle />
      </Providers>
    </BrowserRouter>
  )
}

export default Container
