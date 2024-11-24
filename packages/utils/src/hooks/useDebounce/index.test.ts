import { act, renderHook } from '@testing-library/react'
import { vi as jest } from 'vitest'
import { useDebounce } from './index'

jest.useFakeTimers()

describe('useDebounce', () => {
  test('should debounce the callback function', () => {
    const callback = jest.fn()
    const { result } = renderHook(() => useDebounce(callback, 1000))

    act(() => {
      result.current('test')
      result.current('test2')
    })

    expect(callback).not.toBeCalled()

    act(() => {
      jest.advanceTimersByTime(1000)
    })

    expect(callback).toBeCalledWith('test2')
    expect(callback).toHaveBeenCalledTimes(1)
  })
})
