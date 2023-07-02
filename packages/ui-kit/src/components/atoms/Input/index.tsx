import {
  SizeCSSHeightEnum,
  SizeType,
  SizeCSSWidthEnum,
  VariantType,
  SizeCSSTextEnum,
} from '@utils/types/'
import clsx from 'clsx'
import {
  InputHTMLAttributes,
  forwardRef,
  useState,
  FocusEvent,
  ChangeEvent,
} from 'react'

type OwnPropertyType = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
  size?: SizeType
  variant?: VariantType
  label?: string
}

export const Input: FC<OwnPropertyType> = forwardRef<
  HTMLInputElement,
  OwnPropertyType
>(
  (
    {
      size = 'm',
      className = '',
      variant = 'filled',
      label,
      placeholder,
      onFocus,
      onBlur,
      onChange,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState<boolean>(false)
    const [hasValue, setHasValue] = useState<boolean>(false)

    const onFocusHandler = (event: FocusEvent<HTMLInputElement>) => {
      setIsFocused(true)

      onFocus && onFocus(event)
    }

    const onBlurHandler = (event: FocusEvent<HTMLInputElement>) => {
      setIsFocused(false)
      setHasValue(event.target.value !== '')

      onBlur && onBlur(event)
    }

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setHasValue(event.target.value !== '')

      onChange && onChange(event)
    }

    const isLabelShown = isFocused || hasValue
    const isPlaceHolderShown = isLabelShown && !hasValue

    return (
      <div
        className={clsx(
          'relative box-border flex flex-col justify-end transition-all duration-100',
          size === 's' &&
            `${SizeCSSWidthEnum.s} ${SizeCSSHeightEnum.s} ${SizeCSSTextEnum.s}`,
          size === 'm' &&
            `${SizeCSSWidthEnum.m} ${SizeCSSHeightEnum.m} ${SizeCSSTextEnum.m}`,
          size === 'l' &&
            `${SizeCSSWidthEnum.l} ${SizeCSSHeightEnum.l} ${SizeCSSTextEnum.l}`
        )}>
        <fieldset
          className={clsx(
            'relative pl-2',
            variant === 'outlined' && 'rounded-lg border',
            variant === 'text' && 'border-b-2',

            isFocused && 'text-status-focus'
          )}>
          <legend
            className={clsx(
              'left-auto top-auto mr-auto px-2',
              isLabelShown ? 'text-xs' : 'absolute bottom-0 left-0 '
            )}>
            {label}
          </legend>
          <input
            ref={ref}
            placeholder={
              isPlaceHolderShown && placeholder ? placeholder : undefined
            }
            className={clsx(
              'placeholder:text-primary-dark relative box-border overflow-hidden bg-transparent pl-2 focus:outline-0',

              isLabelShown ? '' : 'pt-[0.48rem]',

              variant === 'filled' && 'text-primary-light active:opacity-80',
              variant === 'outlined' && 'bg-primary-light text-primary-dark',
              variant === 'text' && 'text-primary-dark',

              className
            )}
            onBlur={onBlurHandler}
            onFocus={onFocusHandler}
            onChange={onChangeHandler}
            {...props}
          />
        </fieldset>
      </div>
    )
  }
)

Input.displayName = 'Input'
