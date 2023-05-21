type EventTransferPayloadType<T> = {
  data: T
  debug?: boolean
  name: string | NameType
}

type NameType = {
  eventName: string
  tag?: string
  mfName: string
}

export const EventTransfer = <T extends unknown>({
  data,
  name,
  debug,
}: EventTransferPayloadType<T>) => {
  const type =
    typeof name === 'object'
      ? `${name.mfName}-${name.tag ? `${name.tag}-` : ''}${name.eventName}`
      : name

  const event = new CustomEvent(type, { detail: { data } })

  dispatchEvent(event)

  if (debug) {
    console.log('Event type:', type, '\nevent.detail.data: ', data)
  }
}
