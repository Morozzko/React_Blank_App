import { useDispatch } from 'react-redux'
import { AppDispatchType } from '../../app/store/store'

// useAppDispatch - это пользовательский хук, который оборачивает стандартный хук useDispatch из react-redux. Он предоставляет функцию dispatch с определенным типом AppDispatchType, что облегчает работу с типами TypeScript и упрощает диспетчеризацию действий в Redux.
export const useAppDispatch = () => useDispatch<AppDispatchType>()
