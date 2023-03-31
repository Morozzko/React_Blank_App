import styled from '@emotion/styled/macro'
import { IStyleContainer, style } from '@npm.piece/dynamic-styles'

const Box = styled.div<IStyleContainer>`
  ${style};
`

const A = styled.a<IStyleContainer>`
  ${style};
`

const H1 = styled.h1<IStyleContainer>`
  ${style};
`

const H2 = styled.h2<IStyleContainer>`
  ${style};
`

const H3 = styled.h3<IStyleContainer>`
  ${style};
`

const H4 = styled.h4<IStyleContainer>`
  ${style};
`

const H5 = styled.h5<IStyleContainer>`
  ${style};
`

const P = styled.p<IStyleContainer>`
  ${style};
`
const SPAN = styled.span<IStyleContainer>`
  ${style};
`

const TH = styled.th<IStyleContainer>`
  ${style};
`

const TD = styled.td<IStyleContainer>`
  ${style};
`

const TR = styled.tr<IStyleContainer>`
  ${style};
`

const Table = styled.table<IStyleContainer>`
  ${style};
`

const Button = styled.button<IStyleContainer>`
  ${style};
`

const Input = styled.input<IStyleContainer>`
  ${style};
`

const UL = styled.ul<IStyleContainer>`
  ${style};
`

const LI = styled.li<IStyleContainer>`
  ${style};
`

const Nav = styled.nav<IStyleContainer>`
  ${style};
`

const Header = styled.header<IStyleContainer>`
  ${style};
`

const Footer = styled.footer<IStyleContainer>`
  ${style};
`

export const Styled = {
  a: A,
  div: Box,
  button: Button,
  footer: Footer,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: Header,
  input: Input,
  li: LI,
  nav: Nav,
  p: P,
  span: SPAN,
  td: TD,
  th: TH,
  tr: TR,
  table: Table,
  ul: UL,
}
