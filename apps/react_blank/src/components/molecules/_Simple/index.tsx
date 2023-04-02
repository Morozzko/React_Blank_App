import React from 'react'
import { SimpleStyle } from './style'

type OwnPropertyType = {}

export const Simple: FC<OwnPropertyType> = React.memo(() => <SimpleStyle>simple</SimpleStyle>)
