import { Deque } from './index'

describe('Deque', () => {
  let deque: Deque<number>

  beforeEach(() => {
    deque = new Deque<number>()
  })

  test('addFront', () => {
    deque.addFront(1)
    deque.addFront(2)
    expect(deque['items']).toEqual([2, 1])
  })

  test('addBack', () => {
    deque.addBack(1)
    deque.addBack(2)
    expect(deque['items']).toEqual([1, 2])
  })

  test('removeFront', () => {
    deque.addFront(1)
    deque.addFront(2)
    expect(deque.removeFront()).toBe(2)
    expect(deque['items']).toEqual([1])
  })

  test('removeBack', () => {
    deque.addBack(1)
    deque.addBack(2)
    expect(deque.removeBack()).toBe(2)
    expect(deque['items']).toEqual([1])
  })

  test('isEmpty', () => {
    expect(deque.isEmpty()).toBe(true)
    deque.addBack(1)
    expect(deque.isEmpty()).toBe(false)
  })
})
