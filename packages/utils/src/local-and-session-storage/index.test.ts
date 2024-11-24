import { getFromLocalStorage } from './getFromLocalStorage'
import { getFromSessionStorage } from './getFromSessionStorage'
import { setToLocalStorage } from './setToLocalStorage'
import { setToSessionStorage } from './setToSessionStorage'

const localStorageMock = (() => {
  let store: Record<string, any> = {}

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: any) => (store[key] = value.toString()),
    clear: () => (store = {}),
  }
})()

// Мок для sessionStorage
const sessionStorageMock = (() => {
  let store: Record<string, any> = {}

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: any) => (store[key] = value.toString()),
    clear: () => (store = {}),
  }
})()

// Применение моков
Object.defineProperty(window, 'localStorage', { value: localStorageMock })
Object.defineProperty(window, 'sessionStorage', { value: sessionStorageMock })

describe('Local and Session Storage functions', () => {
  // Тестирование функции getFromLocalStorage
  it('should retrieve an item from local storage', () => {
    const key = 'testKey'
    const value = { data: 'testData' }
    localStorage.setItem(key, JSON.stringify(value))
    const result = getFromLocalStorage<typeof value>(key)
    expect(result).toEqual(value)
  })

  // Тестирование функции getFromSessionStorage
  it('should retrieve an item from session storage', () => {
    const key = 'testKey'
    const value = { data: 'testData' }
    sessionStorage.setItem(key, JSON.stringify(value))
    const result = getFromSessionStorage<typeof value>(key)
    expect(result).toEqual(value)
  })

  // Тестирование функции setToLocalStorage
  it('should set an item to local storage', () => {
    const key = 'testKey'
    const value = { data: 'testData' }
    setToLocalStorage<typeof value>(key, value)
    const result = JSON.parse(localStorage.getItem(key) as string)
    expect(result).toEqual(value)
  })

  // Тестирование функции setToSessionStorage
  it('should set an item to session storage', () => {
    const key = 'testKey'
    const value = { data: 'testData' }
    setToSessionStorage<typeof value>(key, value)
    const result = JSON.parse(sessionStorage.getItem(key) as string)
    expect(result).toEqual(value)
  })

  // Тестирование функции getFromLocalStorage с пустым ключом
  it('should return null if no item in local storage for given key', () => {
    const key = 'nonExistentKey'
    const result = getFromLocalStorage<any>(key)
    expect(result).toBeNull()
  })

  // Тестирование функции getFromSessionStorage с пустым ключом
  it('should return null if no item in session storage for given key', () => {
    const key = 'nonExistentKey'
    const result = getFromSessionStorage<any>(key)
    expect(result).toBeNull()
  })
})
