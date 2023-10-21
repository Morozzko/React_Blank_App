type ClassValueType = ClassArrayType | ClassDictionaryType | string | number | null | boolean | undefined;
type ClassDictionaryType = Record<string, any>;
type ClassArrayType = ClassValueType[];
export declare const clsx: (...args: ClassValueType[]) => string;
export {};
