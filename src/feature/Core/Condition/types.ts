export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed';
export type ErrorType = {
  id: string;
  date: Date;
  field: string;
  error: string;
};
