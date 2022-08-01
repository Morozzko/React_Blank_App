import { Sample } from '../../features/widgets/_Sample'
import { Layout } from '../../layouts'
import { Styled } from '../../styles/DynamicStyledComponent'

export const TodoPage = () => {
  return (
    <Layout.Main>
      <Styled.div column>
        <Sample.Container />
      </Styled.div>
    </Layout.Main>
  )
}
