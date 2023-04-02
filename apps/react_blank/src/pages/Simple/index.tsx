import { Layout } from '@layouts/index'
import { Styled } from '@styles/DynamicStyledComponent'
import { Sample } from '@widgets/_Sample'

export const TodoPage = () => (
  <Layout.Main>
    <Styled.div column middle>
      <Sample.Container />
    </Styled.div>
  </Layout.Main>
)
