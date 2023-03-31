// const { get, set } = useLocalStorage('item')
export const useLocalStorage = (key: string) => {
  const get = () => {
    const localStorageItem = localStorage.getItem(key)

    return localStorageItem && JSON.parse(localStorageItem)
  }

  const set = (data?: any) => {
    localStorage.setItem(key, JSON.stringify(data))
  }

  return { get, set }
}
