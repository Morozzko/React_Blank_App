type OptionsType = Partial<{
    leading: boolean;
    trailing: boolean;
}>;
interface IThrottle<T extends (...args: any[]) => any> {
    (...args: Parameters<T>): ReturnType<T> | undefined;
    cancel(): void;
    flush(): ReturnType<T> | undefined;
}
export declare const useThrottle: <T extends (...args: any[]) => any>(callback: T, delay: number, deps?: any[], options?: OptionsType) => IThrottle<T>;
export {};
