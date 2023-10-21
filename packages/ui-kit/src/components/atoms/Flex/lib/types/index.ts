export type JustifyContentType =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

export type AlignItemsType =
  | 'center'
  | 'flex-start'
  | 'stretch'
  | 'flex-end'
  | 'baseline'

export const alignItems: Record<AlignItemsType, string> = {
  'flex-start': 'items-start',
  'flex-end': 'items-end',
  center: 'items-center',
  baseline: 'items-baseline',
  stretch: 'items-stretch',
}

export const justifyContent: Record<JustifyContentType, string> = {
  'flex-start': 'justify-start',
  'flex-end': 'justify-end',
  center: 'justify-center',
  'space-between': 'justify-between',
  'space-around': 'justify-around',
  'space-evenly': 'justify-evenly',
}
