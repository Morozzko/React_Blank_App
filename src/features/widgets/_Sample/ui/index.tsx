import React, { FC } from 'react'
import StyleContainer from '../../../../styles/StyleContainer'
import { RedModule } from '../../../../modules/import'

export type UIPropertyType = {}

const UI: FC<UIPropertyType> = props => {
  return (
    <StyleContainer>
      <RedModule />
    </StyleContainer>
  )
}

export default React.memo(UI)
