export const GetFromSessionStorage = <T>(key: string) => {
	const sessionStorageItem = sessionStorage.getItem(key)

	return sessionStorageItem ? (JSON.parse(sessionStorageItem) as T) : null
}
