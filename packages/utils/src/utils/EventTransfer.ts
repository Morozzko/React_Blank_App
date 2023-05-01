type EventTransferPayloadType = {
	data: object | string | number | boolean | any[]
	debug?: boolean
	name: string | NameType
}

type NameType = {
	eventName: string
	tag?: string
	mfName: string
}

export const EventTransfer = ({
	data,
	name,
	debug,
}: EventTransferPayloadType) => {
	let type

	if (typeof name === 'object') {
		const { tag, mfName, eventName } = name
		const thisTag = tag ? `${tag}-` : ''
		type = `${mfName}-${thisTag}${eventName}`
	} else {
		type = name
	}

	const Event = new CustomEvent(type, { detail: { data } })

	dispatchEvent(Event)

	if (debug) {
		console.log('Event type:', type, '\nevent.detail.data: ', data)
	}
}
