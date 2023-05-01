export const SetToLocalStorage = (key: string, data: any) => {
	localStorage.setItem(key, JSON.stringify(data))
}
