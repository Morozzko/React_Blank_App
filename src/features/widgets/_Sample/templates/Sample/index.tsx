import React from 'react'
import { Styled } from '../../../../../styles/DynamicStyledComponent'

type OwnPropertyType = {}

const Sample: FC<OwnPropertyType> = ({ children }) => {
  return <Styled.div>asd</Styled.div>
}

export default React.memo(Sample)
