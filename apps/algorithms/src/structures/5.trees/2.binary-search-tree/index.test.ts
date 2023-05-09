import { BSTNode, BinarySearchTree } from './index'

describe('BSTNode', () => {
	it('should create a new BSTNode with the given value', () => {
		const node = new BSTNode<number>(5)
		expect(node.value).toBe(5)
		expect(node.left).toBeNull()
		expect(node.right).toBeNull()
	})
})

describe('BinarySearchTree', () => {
	let binarySearchTree: BinarySearchTree<number>

	beforeEach(() => {
		binarySearchTree = new BinarySearchTree<number>()
	})

	it('should create an empty BinarySearchTree', () => {
		expect(binarySearchTree.root).toBeNull()
	})

	it('should insert values correctly', () => {
		binarySearchTree.insert(5)
		expect(binarySearchTree.root?.value).toBe(5)

		binarySearchTree.insert(3)
		expect(binarySearchTree.root?.left?.value).toBe(3)

		binarySearchTree.insert(7)
		expect(binarySearchTree.root?.right?.value).toBe(7)

		binarySearchTree.insert(2)
		expect(binarySearchTree.root?.left?.left?.value).toBe(2)

		binarySearchTree.insert(4)
		expect(binarySearchTree.root?.left?.right?.value).toBe(4)
	})

	it('should check if a value is in the tree', () => {
		binarySearchTree.insert(5)
		binarySearchTree.insert(3)
		binarySearchTree.insert(7)
		binarySearchTree.insert(2)
		binarySearchTree.insert(4)

		expect(binarySearchTree.contains(5)).toBe(true)
		expect(binarySearchTree.contains(3)).toBe(true)
		expect(binarySearchTree.contains(7)).toBe(true)
		expect(binarySearchTree.contains(2)).toBe(true)
		expect(binarySearchTree.contains(4)).toBe(true)

		expect(binarySearchTree.contains(1)).toBe(false)
		expect(binarySearchTree.contains(6)).toBe(false)
		expect(binarySearchTree.contains(8)).toBe(false)
	})
})
