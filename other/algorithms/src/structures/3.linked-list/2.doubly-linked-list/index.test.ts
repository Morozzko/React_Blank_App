import { DoublyLinkedList } from './index'

describe('DoublyLinkedList', () => {
  let list: DoublyLinkedList<number>

  beforeEach(() => {
    list = new DoublyLinkedList<number>()
  })

  describe('addFirst', () => {
    test('should add a node to an empty list', () => {
      list.addFirst(1)
      expect(list.removeFirst()).toBe(1)
    })

    test('should add a node to the beginning of a non-empty list', () => {
      list.addFirst(1)
      list.addFirst(2)
      expect(list.removeFirst()).toBe(2)
    })
  })

  describe('removeFirst', () => {
    test('should return null when removing from an empty list', () => {
      expect(list.removeFirst()).toBeNull()
    })

    test('should remove the first node of a non-empty list', () => {
      list.addFirst(1)
      list.addFirst(2)
      expect(list.removeFirst()).toBe(2)
      expect(list.removeFirst()).toBe(1)
    })
  })

  describe('addLast', () => {
    test('should add a node to an empty list', () => {
      list.addLast(1)
      expect(list.removeFirst()).toBe(1)
    })

    test('should add a node to the end of a non-empty list', () => {
      list.addLast(1)
      list.addLast(2)
      expect(list.removeFirst()).toBe(1)
      expect(list.removeFirst()).toBe(2)
    })
  })

  describe('removeLast', () => {
    test('should return null when removing from an empty list', () => {
      expect(list.removeLast()).toBeNull()
    })

    test('should remove the last node of a non-empty list', () => {
      list.addLast(1)
      list.addLast(2)
      expect(list.removeLast()).toBe(2)
      expect(list.removeLast()).toBe(1)
    })
  })

  describe('find', () => {
    test('should return null when the list is empty', () => {
      expect(list.find(1)).toBeNull()
    })

    test('should return null when the value is not found', () => {
      list.addFirst(1)
      list.addFirst(2)
      expect(list.find(3)).toBeNull()
    })

    test('should return the node when the value is found', () => {
      list.addFirst(1)
      list.addFirst(2)
      const node = list.find(1)
      expect(node?.value).toBe(1)
    })
  })
})
