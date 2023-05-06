import { Stack } from './index'

describe('Stack', () => {
	let stack: Stack<number>

	beforeEach(() => {
		stack = new Stack<number>()
	})

	test('push and pop', () => {
		stack.push(1)
		stack.push(2)
		stack.push(3)

		expect(stack.pop()).toBe(3)
		expect(stack.pop()).toBe(2)
		expect(stack.pop()).toBe(1)
	})

	test('isEmpty', () => {
		expect(stack.isEmpty()).toBe(true)

		stack.push(1)
		expect(stack.isEmpty()).toBe(false)

		stack.pop()
		expect(stack.isEmpty()).toBe(true)
	})
})
