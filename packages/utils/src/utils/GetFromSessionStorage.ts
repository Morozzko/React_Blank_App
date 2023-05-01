export const GetFromSessionStorage = (key: string) => {
	const sessionStorageItem = sessionStorage.getItem(key)

	return sessionStorageItem ? JSON.parse(sessionStorageItem) : null
}
