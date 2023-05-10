export const SetToSessionStorage = <T>(key: string, data: T) => {
  sessionStorage.setItem(key, JSON.stringify(data))
}
