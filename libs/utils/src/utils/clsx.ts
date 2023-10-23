import { clsx as origClsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

type ClassValueType =
  | ClassArrayType
  | ClassDictionaryType
  | string
  | number
  | null
  | boolean
  | undefined
type ClassDictionaryType = Record<string, any>
type ClassArrayType = ClassValueType[]

/**
 * The clsx function is a utility for conditionally joining classNames together with tailwind support.
 *
 * @return A string, but we want to return a function that
 *
 */
export const clsx = (...args: ClassValueType[]) => twMerge(origClsx(args))
