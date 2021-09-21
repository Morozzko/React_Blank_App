import React, { FC } from 'react'
import { Provider } from 'react-redux'
import store from '../../store/store'

const ReduxStoreProvider: FC = props => {
  return <Provider store={store}>{props.children}</Provider>
}

export default ReduxStoreProvider
