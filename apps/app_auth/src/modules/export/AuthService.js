import React from 'react'
import { Providers } from '@app/providers'
import { InvisibleAuthModulePage } from '@pages/InvisibleAuthModule'

// Модуль для импорта через Module Federation Plugin
const ExportedModule = () => (
  <Providers>
    <InvisibleAuthModulePage />
  </Providers>
)

export default ExportedModule
