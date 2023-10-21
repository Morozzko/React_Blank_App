type TranslationsType = {
    [key: string]: string;
};
type TranslationFileType = {
    _fileName: string;
} & TranslationsType;
type DictionaryType = {
    [index: number]: {
        _fileName: string;
        [key: string]: string;
    };
};
export declare const downloadGoogleSheet: (href: string) => Promise<string[][]>;
export declare const createDictionary: (googleSheet: string[][]) => DictionaryType;
export declare const createFile: ({ _fileName, ...newData }: TranslationFileType, publicPath: string, fileName?: string) => Promise<void>;
export {};
