import debounce from 'lodash/debounce'
import { useCallback } from 'react'

// const log = useDebounce((params) => console.log(params), 1000);
export const useDebounce = (callback: Function, delay: number) =>
	useCallback(
		debounce((...args) => callback(...args), delay),
		[delay]
	)
