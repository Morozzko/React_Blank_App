import React from 'react'
import { dti } from '../../constants/data-testid'

type OwnPropertyType = {}

export const Simple: FC<OwnPropertyType> = React.memo(({}) => {
  const simple = 'simple'

  return <div data-testid={`${dti}sample`}>{simple}</div>
})
