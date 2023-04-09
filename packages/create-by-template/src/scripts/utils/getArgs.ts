import { templates } from './lib/enums'

const getType = (value: string) => {
  let type: string | undefined
  switch (value.toLowerCase()) {
    case templates.widget:
      type = templates.widget
      break
    case templates.service:
      type = templates.service
      break
    default:
      console.log('\x1b[31m', `First argument must be service or widget`, '\x1b[0m')

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
  const firstLetterToRightCase = type === templates.widget ? firstLetter.toUpperCase() : firstLetter.toLowerCase()
  name = `${firstLetterToRightCase}${name.slice(1)}`

  return name
}

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

  return {
    type,
    name,
  }
}
