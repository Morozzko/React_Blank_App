export const getMaxPrefixSum = (arr: number[]) => {
	let maximalSum = 0
	let currentSum = 0

	for (let i = 0; i < arr.length; i++) {
		currentSum += arr[i]
		maximalSum = Math.max(maximalSum, currentSum)
	}

	return maximalSum
}
