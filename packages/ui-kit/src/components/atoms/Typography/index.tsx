import React from 'react'

type TypographyType =
  | 'Header/h1'
  | 'Header/h2'
  | 'Header/h3'
  | 'Header/h4'
  | 'Header/h5'
  | 'Header/h6'
  | 'Body/Long'
  | 'Body/Short'
  | 'Caption/c1'
  | 'Caption/c2'

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
  'Header/h1': 'text-6xl font-bold leading-none',
  'Header/h2': 'text-5xl font-bold leading-tight',
  'Header/h3': 'text-4xl font-bold leading-normal',
  'Header/h4': 'text-3xl font-bold leading-normal',
  'Header/h5': 'text-2xl font-bold leading-normal',
  'Header/h6': 'text-xl font-bold leading-normal',
  'Body/Long': 'text-lg font-normal leading-relaxed',
  'Body/Short': 'text-base font-normal leading-relaxed',
  'Caption/c1': 'text-sm font-normal leading-snug',
  'Caption/c2': 'text-xs font-normal leading-snug',
}

type OwnPropertyType = {
  typography: TypographyType
  element: ElementType
}

export const Typography: FC<OwnPropertyType> = ({
  typography,
  element,
  children,
}) => {
  const className = typographyToTailwindClass[typography]

  return React.createElement(element, { className }, children)
}
