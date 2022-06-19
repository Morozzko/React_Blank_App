import React from 'react'
import { Styled } from '../../../../../styles/DynamicStyledComponent'

type OwnPropertyType = {}

const Sample: FC<OwnPropertyType> = ({ children }) => {
  return <Styled.Box>asd</Styled.Box>
}

export default React.memo(Sample)
