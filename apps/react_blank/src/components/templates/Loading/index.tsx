import React from 'react'

type OwnPropertyType = {}

export const Loading: FC<OwnPropertyType> = React.memo(() => {
  const loading = 'Loading'

  return <div>{loading}</div>
})
