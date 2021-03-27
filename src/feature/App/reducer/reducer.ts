import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";

const initialState = {
    permission: "user",
    jwt: "",
    status: "idle" as RequestStatusType,
    message: "",
    errors: [] as Array<{ field: string, error: string }>,
    isInitialized: false,
};


export const slice = createSlice({
    name: `App`,
    initialState,
    reducers: {
        setJWT(state, action: PayloadAction<{ jwt: string }>) {
            state.jwt = action.payload.jwt;
        },
        setAppStatus: (state, action: PayloadAction<{ status: RequestStatusType }>) => {
            state.status = action.payload.status;
        },
        setAppMessage: (state, action: PayloadAction<{ error: string }>) => {
            state.message = action.payload.error;
        },
        setAppInitialized: (state, action: PayloadAction<{ isInitialized: boolean }>) => {
            state.isInitialized = action.payload.isInitialized;
        },
        setAppErrors: (state, action: PayloadAction<Array<{ field: string, error: string }>>) => {
            state.errors = [...state.errors, ...action.payload]
        }
    }
});


export const asyncActions = {}
