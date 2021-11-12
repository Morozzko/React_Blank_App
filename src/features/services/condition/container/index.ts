import { useEffect } from 'react'
import { SnackbarKey, useSnackbar } from 'notistack'
import { useAppSelector } from '../../../../utils/hooks/useAppSelector'
import { useActions } from '../../../../utils/hooks/useActions'
import { Actions } from '../store'

let displayed: SnackbarKey[] = []

const useContainer = () => {
  const { removeNotification } = useActions(Actions)
  const { notifications } = useAppSelector(state => state.condition)
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  const storeDisplayed = (id: SnackbarKey) => {
    displayed = [...displayed, id]
  }

  // const removeDisplayed = (id: SnackbarKey) => {
  //   displayed = [...displayed.filter(key => id !== key)]
  // }

  useEffect(() => {
    //@ts-ignore
    notifications.forEach(({ key, message, options = {}, dismissed = false }) => {
      if (dismissed) {
        closeSnackbar(key)
        return
      }

      if (displayed.includes(key)) return

      enqueueSnackbar(message, {
        key,
        ...options,
      })

      storeDisplayed(key)
    })
  }, [notifications, closeSnackbar, enqueueSnackbar, removeNotification])
}

export default useContainer
