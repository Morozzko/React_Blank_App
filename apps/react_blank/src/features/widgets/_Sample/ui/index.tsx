import React from 'react'
import { Styled } from '../../../../styles/DynamicStyledComponent'

export type UIPropertyType = {}

export const UI: FC<UIPropertyType> = React.memo(props => <Styled.div>123</Styled.div>)
