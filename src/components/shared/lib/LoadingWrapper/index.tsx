import React, { FC } from 'react'
import Loading from '../../../templates/Loading'

type OwnPropertyType = {
  loading: boolean
}

const LoadingWrapper: FC<OwnPropertyType> = ({ children, loading }) => {
  return <>{loading ? <Loading /> : children}</>
}

export default React.memo(LoadingWrapper)
