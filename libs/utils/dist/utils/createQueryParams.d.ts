export type SelectedFiltersType = {
    [param: string]: string | null | undefined | string[];
};
export declare const createQueryParams: (params: SelectedFiltersType) => string;
