import { DependencyList, EffectCallback, useEffect, useRef } from 'react'

// useEffectWithoutFirstCall(() => {}, []);
export const useEffectWithoutFirstCall = (effect: EffectCallback, deps?: DependencyList) => {
  const isMounted = useRef(false)

  useEffect(() => {
    if (isMounted.current) {
      return effect()
    }
    isMounted.current = true
  }, deps)
}
