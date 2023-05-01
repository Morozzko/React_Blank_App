export const GetFromLocalStorage = (key: string) => {
	const localStorageItem = localStorage.getItem(key)

	return localStorageItem ? JSON.parse(localStorageItem) : null
}
