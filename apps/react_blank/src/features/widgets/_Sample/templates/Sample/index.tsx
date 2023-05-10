import React from 'react'

type OwnPropertyType = {}

export const Simple: FC<OwnPropertyType> = React.memo(({}) => {
  const simple = 'simple'

  return <div>{simple}</div>
})
