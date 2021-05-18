import {AxiosError} from 'axios';
import {Dispatch} from 'redux';
import {ResponseType} from '../feature/Core/App/types';
import {Condition} from '../feature/Core/Condition';

export type ThunkAPIType = {
    dispatch: Dispatch;
    rejectWithValue: Function;
};

export const handleAsyncServerAppError = <D>(data: ResponseType<D>, thunkAPI: ThunkAPIType, showError = true) => {
    if (showError) {
        thunkAPI.dispatch(Condition.Actions.enqueueNotification({
            variant: "error",
            message: data.message ? data.message : 'Some error occurred'
        }));
    }
    thunkAPI.dispatch(Condition.Actions.setAppStatus({status: 'failed'}));

    return thunkAPI.rejectWithValue({
        errors: data.message,
        fieldsErrors: undefined,
    });
};

export const handleAsyncServerNetworkError = (error: AxiosError, thunkAPI: ThunkAPIType, showError = true) => {
    if (showError) {
        thunkAPI.dispatch(Condition.Actions.enqueueNotification({
            variant: "error",
            message: error.message
        }));
    }
    thunkAPI.dispatch(Condition.Actions.setAppStatus({status: 'failed'}));

    return thunkAPI.rejectWithValue({
        errors: [error.message],
        fieldsErrors: undefined,
    });
};

export const checkIsNumber = (param: string) => /^([-+])?([0-9]+|Infinity)$/.test(param);
