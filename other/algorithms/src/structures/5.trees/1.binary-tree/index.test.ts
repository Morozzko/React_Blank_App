import { TreeNode, BinaryTree } from './index'

describe('TreeNode', () => {
  it('should create a new TreeNode with the given value', () => {
    const node = new TreeNode<number>(5)
    expect(node.value).toBe(5)
    expect(node.left).toBeNull()
    expect(node.right).toBeNull()
  })
})

describe('BinaryTree', () => {
  let binaryTree: BinaryTree<number>

  beforeEach(() => {
    binaryTree = new BinaryTree<number>()
  })

  it('should create an empty BinaryTree', () => {
    expect(binaryTree.root).toBeNull()
  })

  it('should insert values correctly', () => {
    binaryTree.insert(5)
    expect(binaryTree.root?.value).toBe(5)

    binaryTree.insert(3)
    expect(binaryTree.root?.left?.value).toBe(3)

    binaryTree.insert(7)
    expect(binaryTree.root?.right?.value).toBe(7)

    binaryTree.insert(2)
    expect(binaryTree.root?.left?.left?.value).toBe(2)

    binaryTree.insert(4)
    expect(binaryTree.root?.left?.right?.value).toBe(4)
  })

  it('should check if a value is in the tree', () => {
    binaryTree.insert(5)
    binaryTree.insert(3)
    binaryTree.insert(7)
    binaryTree.insert(2)
    binaryTree.insert(4)

    expect(binaryTree.contains(5)).toBe(true)
    expect(binaryTree.contains(3)).toBe(true)
    expect(binaryTree.contains(7)).toBe(true)
    expect(binaryTree.contains(2)).toBe(true)
    expect(binaryTree.contains(4)).toBe(true)

    expect(binaryTree.contains(1)).toBe(false)
    expect(binaryTree.contains(6)).toBe(false)
    expect(binaryTree.contains(8)).toBe(false)
  })
})
