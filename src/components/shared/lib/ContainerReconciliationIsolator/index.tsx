import React from 'react'

type OwnPropertyType = {
  containers: Array<() => void>
}

const CRI = ({ containers }: OwnPropertyType) => {
  containers.forEach(container => container())

  return null
}

export default React.memo(CRI)
