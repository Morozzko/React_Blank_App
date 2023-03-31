import React, { Suspense, lazy } from 'react'
import { ErrorBoundary } from '../../utils/functions/ErrorBoundary'

const RedModuleLazy = lazy(async () => await import('RenameImportedModuleHere/AnyNameHere'))

const RemoteFactory = JSX => (
  <ErrorBoundary>
    <Suspense fallback={'Load'}>{JSX}</Suspense>
  </ErrorBoundary>
)

export const RedModule = props => RemoteFactory(<RedModuleLazy {...props} />)
