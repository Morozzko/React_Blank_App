import {FC} from "react";
import {ErrorType} from "../Condition/types";

enum ResultCodeEnum {
    ERROR,
    SUCCESS,
    NOT_FOUND,
}

export type ResponseType<D> = {
    data: D
    ResultCode: ResultCodeEnum
    errors: Array<ErrorType>
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
    component: FC | JSX.Element
    exact?: boolean
}