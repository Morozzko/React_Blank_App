import React from 'react'
import { SimpleStyle } from './style'

type OwnPropertyType = {}

const Simple: FC<OwnPropertyType> = () => {
  return <SimpleStyle>123</SimpleStyle>
}

export default React.memo(Simple)
