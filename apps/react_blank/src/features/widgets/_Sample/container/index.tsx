import React from 'react'
import { UI } from '../ui'
import { useContainer } from './useContainer'

export const Container: FC = React.memo(() => <UI {...useContainer()} />)
