import React from 'react';
type OwnPropertyType<T> = {
    items?: T[] | null;
    renderItem: (item: T, index?: number) => React.ReactNode;
};
export declare const ArrayRender: <T extends unknown>({ items, renderItem, }: OwnPropertyType<T>) => JSX.Element;
export {};
