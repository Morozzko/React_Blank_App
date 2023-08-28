import { useEffect } from 'react'

type NameType = {
  eventName: string
  tag?: string
  mfName: string
}

export const useSubscribe = <T = any>(
  type: string | NameType,
  callback: (eventData: T) => void
): void => {
  const eventType =
    typeof type === 'object'
      ? `${type.mfName}-${type.tag ? `${type.tag}-` : ''}${type.eventName}`
      : type

  const eventHandler = (event: CustomEvent) => {
    callback(event.detail.data)
  }

  useEffect(() => {
    window.addEventListener(eventType, eventHandler as EventListener)

    return () => {
      window.removeEventListener(eventType, eventHandler as EventListener)
    }
  }, [])
}
