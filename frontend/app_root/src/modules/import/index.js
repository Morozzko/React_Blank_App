import React, { Suspense, lazy } from 'react'
import { ErrorBoundary } from '@npm.piece/utils'

const AuthModuleLazy = lazy(async () => await import('AuthMF/AuthContainer'))
// const AuthServiceLazy = lazy(async () => await import('AuthMF/AuthService'))

const RemoteFactory = JSX => (
  <ErrorBoundary errorComponent={<h1>error</h1>}>
    <Suspense fallback="Load">{JSX}</Suspense>
  </ErrorBoundary>
)

export const AuthModule = props => RemoteFactory(<AuthModuleLazy {...props} />)
