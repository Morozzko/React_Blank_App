export const getFromLocalStorage = <T>(key: string) => {
  const localStorageItem = localStorage.getItem(key)

  return localStorageItem ? (JSON.parse(localStorageItem) as T) : null
}
