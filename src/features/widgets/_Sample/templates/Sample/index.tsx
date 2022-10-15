import React from 'react'
import { Styled } from '../../../../../styles/DynamicStyledComponent'

type OwnPropertyType = {}

export const Sample: FC<OwnPropertyType> = React.memo(({ children }) => {
  return <Styled.div>asd</Styled.div>
})

