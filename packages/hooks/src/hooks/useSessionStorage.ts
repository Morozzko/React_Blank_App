// const { get, set } = useSessionStorage('item')
export const useSessionStorage = (key: string) => {
  const get = () => {
    const sessionStorageItem = sessionStorage.getItem(key)

    return sessionStorageItem && JSON.parse(sessionStorageItem)
  }

  const set = (data?: any) => {
    sessionStorage.setItem(key, JSON.stringify(data))
  }

  return { get, set }
}
