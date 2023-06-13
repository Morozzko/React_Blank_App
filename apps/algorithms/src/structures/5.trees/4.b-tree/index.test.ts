import { BPlusTree } from './index'

describe('BPlusTree', () => {
  let tree: BPlusTree

  beforeEach(() => {
    tree = new BPlusTree(3)
  })

  test('insertion and search', () => {
    tree.insert(1, 'a')
    tree.insert(2, 'b')
    tree.insert(3, 'c')
    tree.insert(4, 'd')
    tree.insert(5, 'e')

    expect(tree.search(1)).toBe('a')
    expect(tree.search(2)).toBe('b')
    expect(tree.search(3)).toBe('c')
    expect(tree.search(4)).toBe('d')
    expect(tree.search(5)).toBe('e')
  })

  test('deletion', () => {
    tree.insert(1, 'a')
    tree.insert(2, 'b')
    tree.insert(3, 'c')
    tree.insert(4, 'd')
    tree.insert(5, 'e')

    tree.remove(3)
    tree.remove(1)

    expect(tree.search(1)).toBeUndefined()
    expect(tree.search(3)).toBeUndefined()
    expect(tree.search(2)).toBe('b')
    expect(tree.search(4)).toBe('d')
    expect(tree.search(5)).toBe('e')
  })

  test('range search', () => {
    tree.insert(1, 'a')
    tree.insert(2, 'b')
    tree.insert(3, 'c')
    tree.insert(4, 'd')
    tree.insert(5, 'e')

    const range = tree.rangeSearch(2, 4)

    expect(range).toEqual(['b', 'c', 'd'])
  })
})
