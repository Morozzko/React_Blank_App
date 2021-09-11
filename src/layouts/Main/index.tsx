import React, { FC } from 'react'
import StyleContainer from '../../styles/StyleContainer'

const Main: FC = props => {
  return <StyleContainer>{props.children}</StyleContainer>
}

export default Main
