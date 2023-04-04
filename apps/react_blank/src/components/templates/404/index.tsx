import React from 'react'

type OwnPropertyType = {}

export const NotFound: FC<OwnPropertyType> = React.memo(({}) => {
  const simple = 'Not found'

  return <div>{simple}</div>
})
