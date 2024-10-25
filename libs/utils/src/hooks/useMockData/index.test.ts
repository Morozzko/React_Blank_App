// useMockData.test.ts
import { renderHook, act } from '@testing-library/react'
import { useMockData } from './index.ts'

// Тестирование хука useMockData
describe('useMockData', () => {
  // Определяем поля данных
  const fields = {
    name: 'string',
    age: 'number',
    isActive: 'boolean',
    createdAt: 'Date',
  } as const

  // Тестируем начальное состояние загрузки
  test('должен инициализироваться с состоянием загрузки', () => {
    const { result } = renderHook(() => useMockData({ fields }))
    expect(result.current.isLoading).toBe(true)
  })

  // Тестируем инициализацию данных
  test('должен инициализироваться с данными', () => {
    const { result } = renderHook(() => useMockData({ fields }))
    console.log(result.current.data)

    expect(result.current.data).toHaveLength(10)
    result.current.data.forEach(item => {
      expect(item).toHaveProperty('id')
      expect(typeof item.name).toBe('string')
      expect(typeof item.age).toBe('number')
      expect(typeof item.isActive).toBe('boolean')
      // @ts-ignore
      expect(item.createdAt instanceof Date).toBe(true)
    })
  })

  // Тестируем добавление нового элемента данных
  test('должен добавить новый элемент данных', () => {
    const { result } = renderHook(() => useMockData({ fields }))

    act(() => {
      result.current.onAddDataHandler()
    })

    expect(result.current.data).toHaveLength(11)
  })

  // Тестируем удаление элемента данных по id
  test('должен удалить элемент данных по id', () => {
    const { result } = renderHook(() => useMockData({ fields }))
    const idToDelete = result.current.data[0].id

    act(() => {
      result.current.onDeleteDataByIdHandler(idToDelete)
    })

    expect(result.current.data).toHaveLength(9)
    expect(
      result.current.data.find(item => item.id === idToDelete)
    ).toBeUndefined()
  })

  // Тестируем изменение элемента данных по id
  test('должен изменить элемент данных по id', () => {
    const { result } = renderHook(() => useMockData({ fields }))
    const idToUpdate = result.current.data[0].id

    act(() => {
      result.current.onChangeDataByIdHandler(idToUpdate, {
        name: 'Обновленное имя',
      })
    })

    const updatedItem = result.current.data.find(item => item.id === idToUpdate)
    expect(updatedItem?.name).toBe('Обновленное имя')
  })

  // Тестируем поиск по значению
  test('должен фильтровать данные по поисковому запросу', () => {
    const { result } = renderHook(() => useMockData({ fields }))

    const searchValue = 'тестовое значение' // Изначально строки имеют значение 'Тестовое значение'
    act(() => {
      result.current.onSearchValueHandler(searchValue)
    })

    expect(result.current.data.length).toBeGreaterThan(0)
    result.current.data.forEach(item => {
      const values = Object.values(item).map(v => v.toString().toLowerCase())
      expect(values.some(val => val.includes(searchValue.toLowerCase()))).toBe(
        true
      )
    })
  })

  // Тестируем сортировку данных по ключу
  test('должен сортировать данные по ключу', () => {
    const { result } = renderHook(() => useMockData({ fields }))

    act(() => {
      result.current.onSortDataHandler('age')
    })

    const sortedAges = result.current.data.map(item => item.age)
    const isSorted = sortedAges.every((val, i, arr) => !i || arr[i - 1] <= val)
    expect(isSorted).toBe(true)
  })
})
