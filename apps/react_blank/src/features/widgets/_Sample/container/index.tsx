import React from 'react'
import { useContainer } from './useContainer'
import { UI } from '../ui'

export const Container: FC = React.memo(() => <UI {...useContainer()} />)

