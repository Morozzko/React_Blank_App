type EventTransferPayloadType<T> = {
    data: T;
    debug?: boolean;
    name: string | NameType;
};
type NameType = {
    eventName: string;
    tag?: string;
    mfName: string;
};
export declare const eventTransfer: <T extends unknown>({ data, name, debug, }: EventTransferPayloadType<T>) => void;
export {};
