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

export const clsx = (...args: ClassValueType[]) => twMerge(origClsx(args))
