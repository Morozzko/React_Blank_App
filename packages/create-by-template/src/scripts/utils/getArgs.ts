import { TemplatesEnum } from './lib/enums'

export enum ARGEnum {
  noStore = 'no-store',
}

export const ARGSVariants: Record<ARGEnum, string[]> = {
  [ARGEnum.noStore]: ['ns', '--no-store', 'no store'],
}

const getType = (value: string) => {
  let type: string | undefined
  switch (value.toLowerCase()) {
    case TemplatesEnum.widget:
      type = TemplatesEnum.widget
      break
    case TemplatesEnum.service:
      type = TemplatesEnum.service
      break
    case TemplatesEnum.page:
      type = TemplatesEnum.page
      break
    default:
      console.log(
        '\x1b[31m',
        `First argument must be service, widget or page`,
        '\x1b[0m'
      )
      break
  }

  return type
}

const getName = (value: string, type: string) => {
  let name = value?.trim()

  if (!name) {
    console.log('\x1b[31m', `Second argument must be name`, '\x1b[0m')
  }

  const firstLetter = name.charAt(0)
  const firstLetterToRightCase =
    type === TemplatesEnum.widget
      ? firstLetter.toUpperCase()
      : firstLetter.toLowerCase()
  name = `${firstLetterToRightCase}${name.slice(1)}`

  return name
}

const findArgs = (arr: string[]) =>
  Object.keys(ARGSVariants).filter(key =>
    ARGSVariants[key as ARGEnum].some(variantOfArg =>
      arr.includes(variantOfArg)
    )
  )

export const getArgs = () => {
  const args = process.argv

  const type = getType(args[2])

  if (!type) {
    return null
  }

  const name = getName(args[3], type)

  if (!name) {
    return null
  }

  const permissions = findArgs(args)

  return {
    type,
    name,
    permissions,
  }
}
