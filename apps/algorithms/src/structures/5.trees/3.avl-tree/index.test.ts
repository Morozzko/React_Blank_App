import { AVLNode, AVLTree } from './index'

describe('AVLNode', () => {
	it('should create a new AVLNode with the given value', () => {
		const node = new AVLNode<number>(5)
		expect(node.value).toBe(5)
		expect(node.left).toBeNull()
		expect(node.right).toBeNull()
		expect(node.height).toBe(1)
	})
})

describe('AVLTree', () => {
	let avlTree: AVLTree<number>

	beforeEach(() => {
		avlTree = new AVLTree<number>()
	})

	it('should create an empty AVLTree', () => {
		expect(avlTree.root).toBeNull()
	})

	it('should insert values and maintain balance', () => {
		avlTree.insert(5)
		expect(avlTree.root?.value).toBe(5)

		avlTree.insert(3)
		expect(avlTree.root?.value).toBe(5)
		expect(avlTree.root?.left?.value).toBe(3)

		avlTree.insert(7)
		expect(avlTree.root?.value).toBe(5)
		expect(avlTree.root?.right?.value).toBe(7)

		avlTree.insert(1)
		expect(avlTree.root?.value).toBe(5)
		expect(avlTree.root?.left?.value).toBe(3)
		expect(avlTree.root?.left?.left?.value).toBe(1)

		avlTree.insert(0)
		expect(avlTree.root?.value).toBe(3)
		expect(avlTree.root?.left?.value).toBe(1)
		expect(avlTree.root?.right?.value).toBe(5)
		expect(avlTree.root?.left?.left?.value).toBe(0)
	})

	it('should check if a value is in the tree', () => {
		avlTree.insert(5)
		avlTree.insert(3)
		avlTree.insert(7)
		avlTree.insert(1)
		avlTree.insert(6)

		expect(avlTree.contains(5)).toBe(true)
		expect(avlTree.contains(3)).toBe(true)
		expect(avlTree.contains(7)).toBe(true)
		expect(avlTree.contains(1)).toBe(true)
		expect(avlTree.contains(6)).toBe(true)

		expect(avlTree.contains(0)).toBe(false)
		expect(avlTree.contains(4)).toBe(false)
		expect(avlTree.contains(8)).toBe(false)
	})

	it('should handle left-left case', () => {
		avlTree.insert(5)
		avlTree.insert(3)
		avlTree.insert(1)

		expect(avlTree.root?.value).toBe(3)
		expect(avlTree.root?.left?.value).toBe(1)
		expect(avlTree.root?.right?.value).toBe(5)
	})

	it('should handle right-right case', () => {
		avlTree.insert(1)
		avlTree.insert(3)
		avlTree.insert(5)

		expect(avlTree.root?.value).toBe(3)
		expect(avlTree.root?.left?.value).toBe(1)
		expect(avlTree.root?.right?.value).toBe(5)
	})

	it('should handle left-right case', () => {
		avlTree.insert(5)
		avlTree.insert(1)
		avlTree.insert(3)

		expect(avlTree.root?.value).toBe(3)
		expect(avlTree.root?.left?.value).toBe(1)
		expect(avlTree.root?.right?.value).toBe(5)
	})

	it('should handle right-left case', () => {
		avlTree.insert(1)
		avlTree.insert(5)
		avlTree.insert(3)

		expect(avlTree.root?.value).toBe(3)
		expect(avlTree.root?.left?.value).toBe(1)
		expect(avlTree.root?.right?.value).toBe(5)
	})
})
