import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'

export type QueryParamsType = Record<string, string | string[]>

export const useQueryParams = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location?.search)

  return useMemo(
    () =>
      Array.from(searchParams).reduce<QueryParamsType>((acc, [key, value]) => {
        // Убираем квадратные скобки, если они есть (для формата ?cars[]=Saab&cars[]=Audi)
        const normalizedKey = key.replace(/\[\]$/, '')

        if (!acc[normalizedKey]) {
          acc[normalizedKey] = value
        } else {
          if (Array.isArray(acc[normalizedKey])) {
            ;(acc[normalizedKey] as string[]).push(value)
          } else {
            acc[normalizedKey] = [acc[normalizedKey] as string, value]
          }
        }

        // Поддержка формата ?cars=Saab,Audi
        if (
          typeof acc[normalizedKey] === 'string' &&
          acc[normalizedKey].includes(',')
        ) {
          acc[normalizedKey] = (acc[normalizedKey] as string).split(',')
        }

        return acc
      }, {}),
    [location?.search]
  )
}
