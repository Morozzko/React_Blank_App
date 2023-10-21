import React, { Component, ErrorInfo, ReactNode } from 'react';
interface IProps {
    children: ReactNode;
    errorComponent: ReactNode;
}
interface IState {
    hasError: boolean;
}
export declare class ErrorBoundary extends Component<IProps, IState> {
    constructor(props: IProps);
    static getDerivedStateFromError(error: Error): {
        hasError: boolean;
    };
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    render(): React.ReactNode;
}
export {};
