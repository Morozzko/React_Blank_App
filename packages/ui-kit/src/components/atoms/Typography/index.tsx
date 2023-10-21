import React, { AnchorHTMLAttributes } from 'react'

type TypographyType =
  | 'Header/HL1'
  | 'Header/HL2'
  | 'Header/HL3'
  | 'Header/H1'
  | 'Header/H2'
  | 'Header/H3'
  | 'Header/H4'
  | 'Header/H5'
  | 'Header/H6'
  | 'Subtitle/Subtitle1'
  | 'Subtitle/Subtitle2'
  | 'Subtitle/Subtitle3'
  | 'Body/Body1Long'
  | 'Body/Body1Short'
  | 'Body/Body2Long'
  | 'Body/Body2Short'
  | 'Button/Button1'
  | 'Button/Button2'
  | 'Caption/Caption1'
  | 'Caption/Caption2'

type ElementType =
  | 'a'
  | 'div'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'

const typographyToTailwindClass: Record<TypographyType, string> = {
  'Header/HL1': 'text-9xl font-550 leading-6',
  'Header/HL2': 'text-8xl font-550 leading-4',
  'Header/HL3': 'text-7xl font-550 leading-5',
  'Header/H1': 'text-6xl font-550 leading-3',
  'Header/H2': 'text-5xl font-550 leading-4',
  'Header/H3': 'text-4xl font-550 leading-3',
  'Header/H4': 'text-3xl font-550 leading-3',
  'Header/H5': 'text-2xl font-550 leading-3',
  'Header/H6': 'text-xl font-550 leading-3',
  'Subtitle/Subtitle1': 'text-xl font-400 leading-3',
  'Subtitle/Subtitle2': 'text-lg font-550 leading-3',
  'Subtitle/Subtitle3': 'text-base font-550 leading-3',
  'Body/Body1Long': 'text-lg font-400 leading-3',
  'Body/Body1Short': 'text-lg font-400 leading-3',
  'Body/Body2Long': 'text-base font-400 leading-3',
  'Body/Body2Short': 'text-base font-400 leading-3',
  'Button/Button1': 'text-lg font-500 leading-3',
  'Button/Button2': 'text-base font-500 leading-3',
  'Caption/Caption1': 'text-sm font-400 leading-3',
  'Caption/Caption2': 'text-xs font-400 leading-3',
}

type OwnPropertyType = {
  typography: TypographyType
  element?: ElementType
  className?: string
  // props?: any
} & AnchorHTMLAttributes<HTMLAnchorElement>

export const Typography: FC<OwnPropertyType> = ({
  typography,
  element = 'span',
  className: clsname = '',
  children,
  ...props
}) => {
  const className = `${clsname} ${typographyToTailwindClass[typography]} font-main`

  return React.createElement(
    element,
    {
      className,
      ...props,
    },
    children
  )
}

Typography.displayName = 'Typography'
