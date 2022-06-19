import { Styled } from '../../styles/DynamicStyledComponent'

const Main: FC = ({ children }) => {
  return <Styled.Box>{children}</Styled.Box>
}

export default Main
