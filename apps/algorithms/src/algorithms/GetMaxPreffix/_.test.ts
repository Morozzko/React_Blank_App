import { getMaxPrefixSum } from './index' // Предполагается, что функция находится в файле getMaxPrefixSum.ts

describe('getMaxPrefixSum', () => {
	test('should return the correct maximum prefix sum', () => {
		const testCases = [
			{
				input: [1, 2, 3, 4, 5],
				expectedOutput: 15,
			},
			{
				input: [5, 4, 3, 2, 1],
				expectedOutput: 15,
			},
			{
				input: [2, 4, 8, 16, 32],
				expectedOutput: 62,
			},
		]

		for (const { input, expectedOutput } of testCases) {
			console.log(getMaxPrefixSum(input), expectedOutput)
			expect(getMaxPrefixSum(input)).toBe(expectedOutput)
		}
	})
})
