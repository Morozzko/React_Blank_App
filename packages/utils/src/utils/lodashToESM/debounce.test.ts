import { vi as jest } from 'vitest'
import { debounce } from './debounce'

jest.useFakeTimers()

describe('debounce function', () => {
  it('should execute the function after the specified wait time', () => {
    const mockFunction = jest.fn()
    const debouncedFunction = debounce(mockFunction, 500)

    debouncedFunction()
    expect(mockFunction).not.toBeCalled()

    jest.advanceTimersByTime(499)
    expect(mockFunction).not.toBeCalled()

    jest.advanceTimersByTime(1)
    expect(mockFunction).toBeCalled()
    expect(mockFunction).toHaveBeenCalledTimes(1)
  })

  it('should not execute the function immediately when "leading" option is false', () => {
    const mockFunction = jest.fn()
    const debouncedFunction = debounce(mockFunction, 500, { leading: false })

    debouncedFunction()
    expect(mockFunction).not.toBeCalled()

    jest.advanceTimersByTime(500)
    expect(mockFunction).toBeCalled()
    expect(mockFunction).toHaveBeenCalledTimes(1)
  })

  it('should execute the function immediately when "leading" option is true', () => {
    const mockFunction = jest.fn()
    const debouncedFunction = debounce(mockFunction, 500, { leading: true })

    debouncedFunction()
    expect(mockFunction).toBeCalled()
    expect(mockFunction).toHaveBeenCalledTimes(1)

    jest.advanceTimersByTime(500)
    expect(mockFunction).toHaveBeenCalledTimes(1) // Should still be 1, not 2
  })
})
