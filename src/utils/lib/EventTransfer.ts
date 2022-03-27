export const EventTransfer = (payload: { EventName: string; data: object, tag?: string, name: string }) => {
  const { data, EventName, tag, name } = payload
  const thisTag=tag?`${tag}-`:""
  const type = `${name}-${thisTag}${EventName}`
  const Event = new CustomEvent(type, { detail: { data } })
  dispatchEvent(Event)
  console.log('Event type:', type, '\nevent.detail.data: ', data)
}
