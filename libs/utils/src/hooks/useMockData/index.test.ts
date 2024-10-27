import { act, renderHook } from '@testing-library/react'
import { useMockData } from './index.ts'

describe('useMockData', () => {
  // Очищаем localStorage перед каждым тестом
  beforeEach(() => {
    localStorage.clear()
  })

  // Определяем поля данных
  const fields = {
    name: 'string',
    age: 'number',
    isActive: 'boolean',
    createdAt: 'Date',
  } as const

  const storageKey = 'testStorageKey'

  const defaultProps = {
    fields,
    page: 1,
    pageSize: 10,
    searchText: '',
    sortKey: null as keyof typeof fields | null,
    sortOrder: 'ASC' as 'ASC' | 'DESC',
    storageKey,
  }

  // Тестируем загрузку данных из localStorage
  test('должен загружать данные из localStorage, если они есть', () => {
    // Сохраняем предварительно данные в localStorage
    const mockData = Array.from({ length: 30 }, () => ({
      id: 'test-id',
      name: 'Тестовое имя',
      age: 25,
      isActive: true,
      createdAt: new Date().toISOString(),
    }))
    localStorage.setItem(storageKey, JSON.stringify(mockData))

    const { result } = renderHook(() => useMockData(defaultProps))

    expect(result.current.data.length).toBeGreaterThan(0)
    expect(result.current.data[0].name).toBe('Тестовое имя')
  })

  // Тестируем генерацию новых данных, если localStorage пуст
  test('должен генерировать новые данные, если localStorage пуст', () => {
    const { result } = renderHook(() => useMockData(defaultProps))

    expect(result.current.data.length).toBeGreaterThan(0)
    expect(result.current.data[0].id).toBeDefined()
  })

  // Тестируем сохранение данных в localStorage при добавлении нового элемента
  test('должен сохранять данные в localStorage при добавлении нового элемента', () => {
    const { result } = renderHook(() => useMockData(defaultProps))

    act(() => {
      result.current.onAddDataHandler()
    })

    const storedData = localStorage.getItem(storageKey)
    expect(storedData).not.toBeNull()

    const parsedData = JSON.parse(storedData!)
    expect(parsedData.length).toBeGreaterThan(30) // Было 30, добавили еще один
  })

  // Тестируем сохранение данных в localStorage при изменении элемента
  test('должен сохранять данные в localStorage при изменении элемента', () => {
    const { result } = renderHook(() => useMockData(defaultProps))
    const idToUpdate = result.current.data[0].id

    act(() => {
      result.current.onChangeDataByIdHandler(idToUpdate, {
        name: 'Обновленное имя',
      })
    })

    const storedData = localStorage.getItem(storageKey)
    expect(storedData).not.toBeNull()

    const parsedData = JSON.parse(storedData!)
    const updatedItem = parsedData.find((item: any) => item.id === idToUpdate)
    expect(updatedItem.name).toBe('Обновленное имя')
  })

  // Тестируем сохранение данных в localStorage при удалении элемента
  test('должен сохранять данные в localStorage при удалении элемента', () => {
    const { result } = renderHook(() => useMockData(defaultProps))

    // Получаем общую длину данных
    const initialTotalLength = result.current.totalDataLength
    const idToDelete = result.current.data[0].id

    act(() => {
      result.current.onDeleteDataByIdHandler(idToDelete)
    })

    // Проверяем, что localStorage обновился после удаления
    const storedData = localStorage.getItem(storageKey)
    expect(storedData).not.toBeNull()

    const parsedData = JSON.parse(storedData!)
    expect(parsedData.length).toBe(initialTotalLength - 1)

    const deletedItem = parsedData.find((item: any) => item.id === idToDelete)
    expect(deletedItem).toBeUndefined()

    // Проверяем, что возвращаемые данные обновились
    expect(result.current.totalDataLength).toBe(initialTotalLength - 1)
    expect(result.current.data.length).toBeLessThanOrEqual(
      defaultProps.pageSize
    )
  })

  // Тестируем добавление нового элемента данных и обновление возвращаемых данных
  test('должен обновлять возвращаемые данные при добавлении нового элемента', () => {
    const { result } = renderHook(() => useMockData(defaultProps))

    // Получаем общую длину данных
    const initialTotalLength = result.current.totalDataLength

    act(() => {
      result.current.onAddDataHandler()
    })

    // Проверяем, что общая длина данных увеличилась
    expect(result.current.totalDataLength).toBe(initialTotalLength + 1)

    // Проверяем, что данные на текущей странице обновились, если это влияет на пагинацию
    expect(result.current.data.length).toBeLessThanOrEqual(
      defaultProps.pageSize
    )
  })
  // Тестируем фильтрацию данных по поисковому запросу
  test('должен фильтровать данные по поисковому запросу', () => {
    const searchText = 'тестовое значение'

    const { result } = renderHook(() =>
      useMockData({
        ...defaultProps,
        searchText,
      })
    )

    expect(result.current.data.length).toBeGreaterThan(0)
    result.current.data.forEach(item => {
      const values = Object.values(item).map(v => v.toString().toLowerCase())
      expect(values.some(val => val.includes(searchText.toLowerCase()))).toBe(
        true
      )
    })
  })

  // Тестируем пагинацию данных
  test('должен возвращать данные соответствующей страницы', () => {
    const pageSize = 5
    const { result, rerender } = renderHook(
      props =>
        useMockData({
          ...defaultProps,
          ...props,
        }),
      {
        initialProps: {
          page: 1,
          pageSize,
        },
      }
    )

    expect(result.current.data).toHaveLength(5)

    // Получаем данные второй страницы
    rerender({
      page: 2,
      pageSize,
    })
    expect(result.current.data).toHaveLength(5)

    // Проверяем, что данные отличаются от первой страницы
    rerender({
      page: 1,
      pageSize,
    })
    const firstPageData = result.current.data
    rerender({
      page: 2,
      pageSize,
    })
    const secondPageData = result.current.data
    expect(secondPageData).not.toEqual(firstPageData)
  })

  // Тестируем сортировку данных по ключу в порядке ASC
  test('должен сортировать данные по ключу в порядке ASC', () => {
    const sortKey = 'age' as keyof typeof fields
    const sortOrder = 'ASC' as 'ASC' | 'DESC'

    const { result } = renderHook(() =>
      useMockData({
        ...defaultProps,
        sortKey,
        sortOrder,
      })
    )

    const sortedAges = result.current.data.map(item => item.age)
    const isSortedAsc = sortedAges.every(
      (val, i, arr) => !i || arr[i - 1] <= val
    )
    expect(isSortedAsc).toBe(true)
  })

  // Тестируем сортировку данных по ключу в порядке DESC
  test('должен сортировать данные по ключу в порядке DESC', () => {
    const sortKey = 'age' as keyof typeof fields
    const sortOrder = 'DESC' as 'ASC' | 'DESC'

    const { result } = renderHook(() =>
      useMockData({
        ...defaultProps,
        sortKey,
        sortOrder,
      })
    )

    const sortedAges = result.current.data.map(item => item.age)
    const isSortedDesc = sortedAges.every(
      (val, i, arr) => !i || arr[i - 1] >= val
    )
    expect(isSortedDesc).toBe(true)
  })

  // Тестируем, что данные сохраняются и загружаются корректно при перезапуске хука
  test('должен сохранять и загружать данные при перезапуске хука', () => {
    const { result, rerender } = renderHook(
      props =>
        useMockData({
          ...defaultProps,
          ...props,
        }),
      {
        initialProps: {},
      }
    )

    // Добавляем новый элемент
    act(() => {
      result.current.onAddDataHandler()
    })

    const dataAfterAddition = result.current.data

    // Перезапускаем хук
    rerender({})

    const dataAfterRerender = result.current.data

    expect(dataAfterRerender).toEqual(dataAfterAddition)
  })
})
