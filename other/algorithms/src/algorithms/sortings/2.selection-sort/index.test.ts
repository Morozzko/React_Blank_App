import { selectionSort } from './index'

describe('test', () => {
  const sortFunction = selectionSort

  test('Sort should correctly sort an array', () => {
    const inputArray = [5, 3, 8, 4, 2]
    const sortedArray = [2, 3, 4, 5, 8]

    console.log(sortFunction(inputArray), sortedArray)

    expect(sortFunction(inputArray)).toEqual(sortedArray)
  })

  test('Sort should return the same array if it is already sorted', () => {
    const inputArray = [1, 2, 3, 4, 5]
    const sortedArray = [1, 2, 3, 4, 5]

    expect(sortFunction(inputArray)).toEqual(sortedArray)
  })

  test('Sort should work with an array of one element', () => {
    const inputArray = [42]
    const sortedArray = [42]

    expect(sortFunction(inputArray)).toEqual(sortedArray)
  })

  test('Sort should work with an empty array', () => {
    const inputArray = [] as number[]
    const sortedArray = [] as number[]
    expect(sortFunction(inputArray)).toEqual(sortedArray)
  })

  test('Sort should work with negative numbers and zeros', () => {
    const inputArray = [0, -5, 3, -8, 2]
    const sortedArray = [-8, -5, 0, 2, 3]
    console.log(sortFunction(inputArray), sortedArray)

    expect(sortFunction(inputArray)).toEqual(sortedArray)
  })
})
