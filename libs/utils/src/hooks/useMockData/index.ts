import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { v4 } from 'uuid'
import { generateRandomValue } from './generateRandomValue.ts'
import { DataItemType, FieldsDefinitionType } from './types.ts'

export type UseMockDataPropsType<Fields extends FieldsDefinitionType> = {
  fields: Fields
}

export const useMockData = <Fields extends FieldsDefinitionType>({
  fields,
}: UseMockDataPropsType<Fields>) => {
  // Симуляция загрузки данных: Начало
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const timeoutId = useRef<NodeJS.Timeout>()
  useEffect(() => {
    timeoutId.current = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => {
      clearTimeout(timeoutId.current)
    }
  }, [])
  // Симуляция загрузки данных: Конец

  // Функция генерации случайного объекта данных
  const generateRandomDataItem = (): DataItemType<Fields> => {
    const item: any = { id: v4() }
    for (const key in fields) {
      const fieldType = fields[key]
      item[key] = generateRandomValue(fieldType)
    }

    return item as DataItemType<Fields>
  }

  // Инициализация данных с помощью случайно сгенерированных элементов
  const [data, setData] = useState<DataItemType<Fields>[]>(() =>
    Array.from({ length: 10 }, generateRandomDataItem)
  )

  // Обработчик добавления нового элемента данных
  const onAddDataHandler = useCallback(() => {
    const newDataItem = generateRandomDataItem()
    setData(prevData => [...prevData, newDataItem])
  }, [fields])

  // Обработчик изменения элемента данных по id
  const onChangeDataByIdHandler = useCallback(
    (id: string, updatedItem: Partial<Omit<DataItemType<Fields>, 'id'>>) => {
      setData(prevData =>
        prevData.map(item =>
          item.id === id
            ? {
                ...item,
                ...updatedItem,
              }
            : item
        )
      )
    },
    []
  )

  // Обработчик удаления элемента данных по id
  const onDeleteDataByIdHandler = useCallback((id: string) => {
    setData(prevData => prevData.filter(item => item.id !== id))
  }, [])

  // Обработчик поиска
  const [searchTerm, setSearchTerm] = useState<string>('')
  const onSearchValueHandler = useCallback((searchValue: string) => {
    setSearchTerm(searchValue)
  }, [])

  // Обработчик сортировки по ключу
  const [sortKey, setSortKey] = useState<keyof Fields | null>(null)
  const onSortDataHandler = useCallback((key: keyof Fields) => {
    setSortKey(key)
  }, [])

  // Фильтрация данных по поисковому запросу
  const filteredData = useMemo(() => {
    if (!searchTerm) {
      return data
    }

    return data.filter(item =>
      Object.keys(fields).some(key => {
        const value = item[key as keyof DataItemType<Fields>]
        if (
          typeof value === 'string' ||
          typeof value === 'number' ||
          typeof value === 'boolean'
        ) {
          return value
            .toString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        } else if (value instanceof Date) {
          return value
            .toISOString()
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
        }

        return false
      })
    )
  }, [data, searchTerm, fields])

  // Сортировка данных по ключу
  const sortedData = useMemo(() => {
    if (!sortKey) {
      return filteredData
    }

    return [...filteredData].sort((a, b) => {
      const aValue = a[sortKey]
      const bValue = b[sortKey]

      if (aValue < bValue) {
        return -1
      }
      if (aValue > bValue) {
        return 1
      }

      return 0
    })
  }, [filteredData, sortKey])

  return {
    data: sortedData,
    isLoading,
    onAddDataHandler,
    onChangeDataByIdHandler,
    onDeleteDataByIdHandler,
    onSearchValueHandler,
    onSortDataHandler,
  }
}
