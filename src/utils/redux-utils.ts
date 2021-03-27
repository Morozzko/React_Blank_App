import {handleAsyncServerAppError, handleAsyncServerNetworkError, ThunkAPIType,} from "./error-utils";
import {App} from "../feature/App";
import {RequestStatusType} from "../feature/App/reducer/reducer";



export const handleSetAppStatus = (status: RequestStatusType, thunkAPI: ThunkAPIType) => thunkAPI.dispatch(App.Actions.setAppStatus({status}));

export const ThunkCreator = async (creator: { param?: any, apiMethod: (param: any) => any, status?: number }, thunkAPI: ThunkAPIType) => {
    creator.status = creator.status ? creator.status : 200
    handleSetAppStatus("loading", thunkAPI);
    try {
        const res = await creator.apiMethod(creator.param);
        if (res.status === creator.status) {
            handleSetAppStatus("succeeded", thunkAPI);
            return res.data
        } else {
            return handleAsyncServerAppError(res.data, thunkAPI);
        }
    } catch (error) {
        return handleAsyncServerNetworkError(error, thunkAPI);
    }
};
