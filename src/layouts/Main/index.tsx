import { Styled } from '../../styles/DynamicStyledComponent'

const Main: FC = ({ children }) => {
  return <Styled.div>{children}</Styled.div>
}

export default Main
