import React from 'react'

export type UIPropertyType = {}

export const UI: FC<UIPropertyType> = React.memo(({}) => {
	const simple = 'simple'

	return <div>{simple}</div>
})
