import React from 'react'

export const Paper: FC = ({ children }) => (
	<div className="z-20 flex cursor-pointer flex-col items-center justify-center rounded-md bg-white p-10 font-medium shadow-xl">
		{children}
	</div>
)
