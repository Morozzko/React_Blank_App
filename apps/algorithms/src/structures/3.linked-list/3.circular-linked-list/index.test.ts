import { CircularLinkedList } from './index'

describe('CircularLinkedList', () => {
	let circularLinkedList: CircularLinkedList<number>

	beforeEach(() => {
		circularLinkedList = new CircularLinkedList<number>()
	})

	describe('addFirst', () => {
		it('should add a node to an empty list', () => {
			circularLinkedList.addFirst(1)

			expect(circularLinkedList.display()).toEqual([1])
		})

		it('should add a node to the beginning of a non-empty list', () => {
			circularLinkedList.addFirst(1)
			circularLinkedList.addFirst(2)
			circularLinkedList.addFirst(3)

			expect(circularLinkedList.display()).toEqual([3, 2, 1])
		})
	})

	describe('addLast', () => {
		it('should add a node to an empty list', () => {
			circularLinkedList.addLast(1)

			expect(circularLinkedList.display()).toEqual([1])
		})

		it('should add a node to the end of a non-empty list', () => {
			circularLinkedList.addLast(1)
			circularLinkedList.addLast(2)
			circularLinkedList.addLast(3)

			expect(circularLinkedList.display()).toEqual([1, 2, 3])
		})
	})

	describe('display', () => {
		it('should display an empty list', () => {
			expect(circularLinkedList.display()).toEqual([])
		})

		it('should display a non-empty list', () => {
			circularLinkedList.addFirst(1)
			circularLinkedList.addFirst(2)
			circularLinkedList.addFirst(3)
			expect(circularLinkedList.display()).toEqual([3, 2, 1])
		})
	})

	describe('displayList', () => {
		it('should display a non-empty list', () => {
			circularLinkedList.addFirst(1)
			circularLinkedList.addFirst(2)
			circularLinkedList.addFirst(3)

			const expectedValues = [3, 2, 1]
			const actualNodes = circularLinkedList.displayList()

			expect(actualNodes.length).toBe(expectedValues.length)
			for (let i = 0; i < expectedValues.length; i++) {
				expect(actualNodes[i].value).toBe(expectedValues[i])
			}
		})
	})
})
