type NameType = {
    eventName: string;
    tag?: string;
    mfName: string;
};
export declare const useSubscribe: <T = any>(type: string | NameType, callback: (eventData: T) => void) => void;
export {};
