import { MutableRefObject } from 'react';
type UseFocusType = [
    htmlElRef: MutableRefObject<HTMLElement | null>,
    setFocus: () => void
];
export declare const useFocus: () => UseFocusType;
export {};
