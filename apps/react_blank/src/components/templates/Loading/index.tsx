import React from 'react'

type OwnPropertyType = {}

export const Loading: FC<OwnPropertyType> = React.memo(() => {
  const simple = 'simple'

  return <div>{simple}</div>
})
