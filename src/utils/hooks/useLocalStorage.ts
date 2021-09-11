export const useLocalStorage = (key: string, data?: any) => {
  function get() {
    const localStorageItem = localStorage.getItem(key)
    return localStorageItem && JSON.parse(localStorageItem)
  }

  function set() {
    localStorage.setItem(key, JSON.stringify(data))
  }

  return { get, set }
}
