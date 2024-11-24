import { act, renderHook } from '@testing-library/react'
import { describe, expect, vi as jest } from 'vitest'
import { useThrottle } from './index'

jest.useFakeTimers()

describe('useThrottle', () => {
  test('should throttle the callback function', () => {
    const callback = jest.fn()
    const { result } = renderHook(() => useThrottle(callback, 1000))

    act(() => {
      result.current('test')
      result.current('test2')
      result.current('test3')
    })

    expect(callback).toBeCalledTimes(1)
    expect(callback).toHaveBeenLastCalledWith('test')

    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(callback).toBeCalledTimes(1)
    expect(callback).toHaveBeenLastCalledWith('test')
  })
})
