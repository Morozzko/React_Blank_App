/**
 * The setToSessionStorage function takes in a key and data, then sets the data to sessionStorage with the given key.
 *
 * @example setToSessionStorage<UserDateType>('user', { id })
 * @param key string Identify the data in session storage
 * @param data T Specify the type of data that will be stored in session storage
 *
 * @return Void
 *
 */
export const setToSessionStorage = <T>(key: string, data: T) => {
  sessionStorage.setItem(key, JSON.stringify(data))
}
