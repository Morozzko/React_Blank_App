import { Sample } from '../../features/widgets/_Sample'
import { Layout } from '../../layouts'
import { Styled } from '../../styles/DynamicStyledComponent'

export const TodoPage = () => {
  return (
    <Layout.Main>
      <Styled.Box column>
        <Sample.Container />
      </Styled.Box>
    </Layout.Main>
  )
}
