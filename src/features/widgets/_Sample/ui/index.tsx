import React from 'react'
import { Styled } from '../../../../styles/DynamicStyledComponent'

export type UIPropertyType = {}

const UI: FC<UIPropertyType> = props => {
  return <Styled.Box></Styled.Box>
}

export default React.memo(UI)
