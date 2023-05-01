import React from 'react'

type OwnPropertyType = {}

export const Sample: FC<OwnPropertyType> = React.memo(({}) => {
	const sample = 'Sample'

	return <div>{sample}</div>
})
