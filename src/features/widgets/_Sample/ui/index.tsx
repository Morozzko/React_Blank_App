import React from 'react'
import { Styled } from '../../../../styles/DynamicStyledComponent'

export type UIPropertyType = {}

const UI: FC<UIPropertyType> = props => {
  return <Styled.div>123</Styled.div>
}

export default React.memo(UI)
