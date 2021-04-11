import {FC} from "react";

enum ResultCodeEnum {
    ERROR,
    SUCCESS,
    NOT_FOUND,
}

export type ResponseType<D> = {
    data: D
    ResultCode: ResultCodeEnum
    errors: Array<{
        field: string
        error: string
    }>
    message: string
}

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";

export type PermissionsType = "viewer" | "admin" | "user" ;

export type FieldErrorType = { field: string; error: string };

export type ThunkError = {
    rejectValue: { errors: Array<string>; fieldsErrors?: Array<FieldErrorType> };
};

export type RouterComponentType = {
    path: string
    component: () => JSX.Element | FC
    exact?: boolean
}