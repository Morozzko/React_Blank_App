import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Providers } from '@app/providers'
import { App } from '../ui'

import '../../../index.css'
import '@app/localization'

// export const basename = process.env.REACT_APP_ROOT_PUBLIC_PATH

// Точка входа для разработки
export const Container: FC = props => (
  <BrowserRouter>
    <Providers>
      <App {...props} />
    </Providers>
  </BrowserRouter>
)

// Импорт приложения для Плагина ModuleFederation
export const ImportedContainer: FC = props => (
  <Providers>
    <App {...props} />
  </Providers>
)
