import { LinkedList } from './index'

describe('LinkedList', () => {
  let linkedList: LinkedList<number>

  beforeEach(() => {
    linkedList = new LinkedList<number>()
  })

  test('addFirst и removeFirst', () => {
    linkedList.addFirst(1)
    linkedList.addFirst(2)
    linkedList.addFirst(3)

    expect(linkedList.removeFirst()).toBe(3)
    expect(linkedList.removeFirst()).toBe(2)
    expect(linkedList.removeFirst()).toBe(1)
  })

  test('addLast', () => {
    linkedList.addLast(1)
    linkedList.addLast(2)
    linkedList.addLast(3)

    expect(linkedList.removeFirst()).toBe(1)
    expect(linkedList.removeFirst()).toBe(2)
    expect(linkedList.removeFirst()).toBe(3)
  })

  test('find', () => {
    linkedList.addLast(1)
    linkedList.addLast(2)
    linkedList.addLast(3)

    const foundNode = linkedList.find(2)
    expect(foundNode?.value).toBe(2)

    const notFoundNode = linkedList.find(4)
    expect(notFoundNode).toBeNull()
  })

  test('пустой список', () => {
    expect(linkedList.removeFirst()).toBeNull()
    expect(linkedList.find(1)).toBeNull()
  })
})
