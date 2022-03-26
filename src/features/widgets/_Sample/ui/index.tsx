import React, { FC } from 'react'
import StyleContainer from '../../../../styles/StyleContainer'

export type UIPropertyType = {}

const UI: FC<UIPropertyType> = props => {
  return <StyleContainer>s</StyleContainer>
}

export default React.memo(UI)
