export type ResponseType<Data = {}> = {
  body: Data;
  messages: string[];
  fieldsErrors: string[];
};

export type FieldErrorType = { field: string; error: string };
export type ThunkError = {
  rejectValue: { errors: Array<string>; fieldsErrors?: Array<FieldErrorType> };
};
