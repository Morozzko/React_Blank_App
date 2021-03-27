import {AxiosError} from "axios";
import {Dispatch} from "redux";
import {ResponseType} from "../api/ResponseType";
import {App} from "../feature/App";

export type ThunkAPIType = {
    dispatch: Dispatch;
    rejectWithValue: Function;
};


export const handleAsyncServerAppError = <D>(data: ResponseType<D>, thunkAPI: ThunkAPIType, showError = true) => {
    if (showError) {
        thunkAPI.dispatch(
            App.Actions.setAppMessage({
                error: data.message ? data.message : "Some error occurred",
            })
        );
        thunkAPI.dispatch(
            App.Actions.setAppErrors(data.errors)
        );
    }
    thunkAPI.dispatch(App.Actions.setAppStatus({status: "failed"}));

    return thunkAPI.rejectWithValue({
        errors: data.message,
        fieldsErrors: data.errors,
    });
};

export const handleAsyncServerNetworkError = (error: AxiosError, thunkAPI: ThunkAPIType, showError = true) => {
    if (showError) {
        thunkAPI.dispatch(
            App.Actions.setAppMessage({error: error.message})
        );
    }
    thunkAPI.dispatch(App.Actions.setAppStatus({status: "failed"}));

    return thunkAPI.rejectWithValue({
        errors: [error.message],
        fieldsErrors: undefined,
    });
};

export const checkIsNumber = (param: string) => /^([-+])?([0-9]+|Infinity)$/.test(param);