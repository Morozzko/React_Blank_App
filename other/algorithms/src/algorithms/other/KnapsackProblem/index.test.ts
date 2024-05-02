import { knapsack } from './index'

describe('test', () => {
  test('knapsack', () => {
    const items = [
      {
        weight: 1,
        value: 10,
      },
      {
        weight: 4,
        value: 40,
      },
      {
        weight: 3,
        value: 50,
      },
      {
        weight: 2,
        value: 30,
      },
    ]
    expect(knapsack(items, 5)).toBe(80)
    expect(knapsack(items, 6)).toBe(100)
    expect(knapsack(items, 7)).toBe(120)
  })
})
