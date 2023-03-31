import React from 'react'
import { Styled } from '../../../../styles/DynamicStyledComponent'

export type UIPropertyType = {}

export const UI: FC<UIPropertyType> =  React.memo((props) => {

  return <Styled.div>123</Styled.div>
})

