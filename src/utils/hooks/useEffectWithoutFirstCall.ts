import { DependencyList, EffectCallback, useEffect, useRef } from 'react'

export const useEffectWithoutFirstCall = (effect: EffectCallback, deps?: DependencyList | undefined) => {
  const isMounted = useRef(false)

  useEffect(() => {
    if (isMounted.current) {
      return effect()
    }
    isMounted.current = true
  }, deps)
}
