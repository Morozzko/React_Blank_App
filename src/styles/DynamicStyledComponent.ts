import styled from '@emotion/styled'
import { IStyleContainer, style } from './StyleFabric'

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


export const Styled = {
  A,
  Button,
  Box,
  H1,
  H2,
  H3,
  H4,
  H5,
  Input,
  LI,
  P,
  SPAN,
  Table,
  TD,
  TH,
  TR,
  UL
}
