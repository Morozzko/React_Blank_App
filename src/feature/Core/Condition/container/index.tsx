import React, { useEffect } from 'react';
import { SnackbarKey, useSnackbar } from 'notistack';
import { useAppSelector } from '../../../../utils/hooks/useAppSelector';
import { useActions } from '../../../../utils/hooks/useActions';
import { Condition } from '../index';

let displayed: SnackbarKey[] = [];

const Container = () => {
  const { removeNotification } = useActions(Condition.Actions);
  const notifications = useAppSelector(state => state.Condition.notifications || []);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const storeDisplayed = (id: SnackbarKey) => {
    displayed = [...displayed, id];
  };

  const removeDisplayed = (id: SnackbarKey) => {
    displayed = [...displayed.filter(key => id !== key)];
  };

  useEffect(() => {
    //@ts-ignore
    notifications.forEach(({ key, message, options = {}, dismissed = false }) => {
      if (dismissed) {
        closeSnackbar(key);
        return;
      }

      if (displayed.includes(key)) return;

      enqueueSnackbar(message, {
        key,
        ...options,
        // onClose: (event, reason, myKey) => {
        //     if (options.onClose) {
        //
        //         // @ts-ignore
        //         options.onClose(event, reason, myKey);
        //     }
        // },
        // onExited: (event, myKey) => {
        //     removeNotification({notificationId: myKey});
        //     removeDisplayed(myKey);
        // },
      });

      // keep track of snackbars that we've displayed
      storeDisplayed(key);
    });
  }, [notifications, closeSnackbar, enqueueSnackbar, removeNotification]);

  return null;
};

export default Container;
