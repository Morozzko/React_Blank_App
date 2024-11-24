import { useEffect } from 'react'

/**
 * The useOnKeyPress function is a custom hook that allows you to add an event listener for the keydown event.
 * It takes in two arguments: a callback function and a string representing the key that should trigger the callback.
 * The useOnKeyPress function returns nothing, but it adds an event listener to window for 'keydown' events.
 * When this happens, it checks if the pressed key matches with our provided string (case-insensitive). If so, then we call our callback and stop propagation of this event so other listeners don't get called as well.
 * @example useOnKeyPress(()=>{}, 'enter')
 *
 * @param callback Function Pass a function into the hook
 * @param key KeyboardEvent['key'] | string Determine which key is pressed
 *
 * @return A hook that will be called when the user presses a key
 *
 */
export const useOnKeyPress = (
  callback: Function,
  key: KeyboardEvent['key'] | string
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event?.key?.toLowerCase() === key?.toLowerCase()) {
        event.stopPropagation()
        callback()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [callback, key])
}
