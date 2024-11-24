/**
 * The getFromSessionStorage function retrieves a value from the sessionStorage object.
 * @example const data = getFromSessionStorage<UserDataType>('user')
 *
 * @param key string Specify the key of the item in session storage
 *
 * @return The parsed item from session storage
 *
 */
export const getFromSessionStorage = <T>(key: string) => {
  const sessionStorageItem = sessionStorage.getItem(key)

  return sessionStorageItem ? (JSON.parse(sessionStorageItem) as T) : null
}
