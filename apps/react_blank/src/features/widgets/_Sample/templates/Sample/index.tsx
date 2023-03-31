import React from 'react'
import { Styled } from '../../../../../styles/DynamicStyledComponent'

type OwnPropertyType = {}

export const Sample: FC<OwnPropertyType> = React.memo(({ children }) => <Styled.div>asd</Styled.div>)
