import { FieldTypesType } from './types.ts'

export const generateRandomValue = (type: FieldTypesType): any => {
  switch (type) {
    case 'string':
      return 'Тестовое значение'
    case 'number':
      return Math.floor(Math.random() * 10000) + 1 // Случайное число от 1 до 10000
    case 'boolean':
      return Math.random() < 0.5 // Случайное булево значение
    case 'Date':
      // Случайная дата за текущий или прошлый год
      // eslint-disable-next-line no-case-declarations
      const start = new Date(new Date().getFullYear() - 1, 0, 1)
      // eslint-disable-next-line no-case-declarations
      const end = new Date()

      return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      )
    default:
      return null
  }
}
