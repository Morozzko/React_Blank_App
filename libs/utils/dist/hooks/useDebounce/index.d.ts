type OptionsType = Partial<{
    leading: boolean;
    trailing: boolean;
    maxWait: number;
}>;
interface IDebounce<T extends (...args: any[]) => any> {
    (...args: Parameters<T>): ReturnType<T> | undefined;
    cancel(): void;
    flush(): ReturnType<T> | undefined;
}
export declare const useDebounce: <T extends (...args: any[]) => any>(callback: T, delay: number, deps?: any[], options?: OptionsType) => IDebounce<T>;
export {};
