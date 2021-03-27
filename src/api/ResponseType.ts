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