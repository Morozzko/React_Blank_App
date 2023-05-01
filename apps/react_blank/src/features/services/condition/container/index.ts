import { SnackbarKey, useSnackbar } from 'notistack'
import { useEffect } from 'react'
import { useAppActions } from '@hooks/useAppActions'
import { useAppSelector } from '@hooks/useAppSelector'

let displayed: SnackbarKey[] = []

export const useContainer = () => {
	const {
		conditionActions: { removeNotification },
	} = useAppActions()
	const { notifications } = useAppSelector(state => state.condition)

	const { enqueueSnackbar, closeSnackbar } = useSnackbar()

	const storeDisplayed = (id: SnackbarKey) => {
		displayed = [...displayed, id]
	}

	useEffect(() => {
		notifications.forEach(
			({
				key,
				message,
				options = {},
				// @ts-ignore
				dismissed = false,
			}) => {
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
			}
		)
	}, [notifications, closeSnackbar, enqueueSnackbar, removeNotification])
}
