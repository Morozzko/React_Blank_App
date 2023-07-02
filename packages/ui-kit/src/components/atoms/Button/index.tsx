import {
  SizeCSSHeightEnum,
  SizeType,
  SizeCSSWidthEnum,
  VariantType,
  SizeCSSTextEnum,
} from '@utils/types/'
import clsx from 'clsx'
import { ButtonHTMLAttributes, forwardRef } from 'react'

type OwnPropertyType = {
  size?: SizeType
  variant?: VariantType
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<OwnPropertyType> = forwardRef<
  HTMLButtonElement,
  OwnPropertyType
>(
  (
    { children, size = 'm', className = '', variant = 'filled', ...props },
    ref
  ) => (
    <button
      ref={ref}
      className={clsx(
        'relative overflow-hidden rounded-lg transition-all duration-300',

        size === 's' &&
          `${SizeCSSWidthEnum.s} ${SizeCSSHeightEnum.s} ${SizeCSSTextEnum.s}`,
        size === 'm' &&
          `${SizeCSSWidthEnum.m} ${SizeCSSHeightEnum.m} ${SizeCSSTextEnum.m}`,
        size === 'l' &&
          `${SizeCSSWidthEnum.l} ${SizeCSSHeightEnum.l} ${SizeCSSTextEnum.l}`,

        variant === 'filled' &&
          'bg-primary-dark-light text-primary-light hover:bg-primary-dark-active dark:bg-primary-dark active:opacity-80',
        variant === 'outlined' &&
          'border-primary-dark bg-primary-light text-primary-dark border',
        variant === 'text' && 'text-primary-dark',

        className
      )}
      {...props}>
      {children}
    </button>
  )
)

Button.displayName = 'Button'
