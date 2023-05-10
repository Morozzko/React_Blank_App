import { Queue } from './index'

describe('Queue', () => {
  let queue: Queue<string>

  beforeEach(() => {
    queue = new Queue<string>()
  })

  test('enqueue and dequeue', () => {
    queue.enqueue('apple')
    queue.enqueue('banana')
    queue.enqueue('orange')

    expect(queue.dequeue()).toBe('apple')
    expect(queue.dequeue()).toBe('banana')
    expect(queue.dequeue()).toBe('orange')
  })

  test('isEmpty', () => {
    expect(queue.isEmpty()).toBe(true)

    queue.enqueue('apple')
    expect(queue.isEmpty()).toBe(false)

    queue.dequeue()
    expect(queue.isEmpty()).toBe(true)
  })
})
