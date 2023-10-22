import { ErrorBoundary } from '@npm.piece/utils'
import React, { Suspense, lazy } from 'react'

const RemoteFactory = JSX => (
  <ErrorBoundary>
    <Suspense fallback="Load">{JSX}</Suspense>
  </ErrorBoundary>
)
