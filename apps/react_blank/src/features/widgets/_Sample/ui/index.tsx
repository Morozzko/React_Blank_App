import React from 'react'
import { dti } from '../constants/data-testid'

export type UIPropertyType = {}

export const UI: FC<UIPropertyType> = React.memo(({}) => {
  const simple = 'simple'

  return <div data-testid={`${dti}sample`}>{simple}</div>
})
