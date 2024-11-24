import { MutableRefObject, useEffect, useState } from 'react'

/**
 * The useIsVisibleElement function is a React hook that returns whether an element is visible in the viewport.
 * @example const isInViewPort = useIsVisibleElement(ref)
 *
 * @param element MutableRefObject&lt;Element | null | undefined; Pass the ref of the element we want to observe
 * @param rootMargin Adjust the root element
 *
 * @return A boolean value that indicates if the element is visible
 *
 */
export const useIsVisibleElement = (
  element: MutableRefObject<Element | null | undefined>,
  rootMargin = 0
) => {
  const [isVisible, setState] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting)
      },
      { rootMargin: `${rootMargin}px` }
    )

    if (element.current) {
      observer.observe(element.current)
    }

    return () => {
      if (element.current) {
        observer.unobserve(element.current)
      }
    }
  }, [])

  return isVisible
}
