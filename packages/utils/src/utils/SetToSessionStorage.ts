export const SetToSessionStorage = (key: string, data: any) => {
  sessionStorage.setItem(key, JSON.stringify(data))
}
