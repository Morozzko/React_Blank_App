import React from 'react'

type OwnPropertyType = {
  containers: Array<() => void>
}

export const CRI = React.memo(({ containers }: OwnPropertyType) => {
  containers.forEach(container => container())

  return null
})
