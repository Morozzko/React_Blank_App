import { useCallback, useState } from 'react'

export const useToggle = (initialState?: boolean) => {
  const [state, setState] = useState<boolean>(initialState ? initialState : false)

  const toggle = useCallback(() => setState(prevState => !prevState),[])

  return [state, toggle]
}
