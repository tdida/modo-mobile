import * as React from 'react';
declare function noop(): void;
export interface PickerData {
    value: string | number;
    label: React.ReactNode;
    children?: PickerData[];
}
export interface PickerProps {
    prefixCls?: string;
    data: PickerData[] | PickerData[][];
    value?: Array<string | number>;
    defaultValue?: Array<string | number>;
    isView?: boolean;
    cols?: number;
    cascade?: boolean;
    disabled?: boolean;
    title?: string;
    okText?: string | React.ReactNode;
    cancelText?: string | React.ReactNode;
    children?: React.ReactChildren;
    onChange?: (value: Array<string | number>) => void;
    onCancel?: () => void;
    onConfirm?: (value: Array<string | number>) => void;
    onColumnChange?: (value: any, index: number) => void;
}
export default class Picker extends React.Component<PickerProps, any> {
    static defaultProps: {
        prefixCls: string;
        isView: boolean;
        cols: number;
        cascade: boolean;
        disabled: boolean;
        okText: string;
        cancelText: string;
        onChange: typeof noop;
        onCancel: typeof noop;
        onConfirm: typeof noop;
        onColumnChange: typeof noop;
    };
    state: {
        value: (string | number)[];
        visible: boolean;
    };
    componentWillReceiveProps(nextProps: PickerProps): void;
    getValue(d?: PickerData[], val?: any): (string | number)[];
    handleChange: (value: any) => void;
    handlePopupCancel: () => void;
    handlePopupConfirm: () => void;
    fireVisibleChange: () => void;
    getLabel: () => string;
    render(): JSX.Element;
}
export {};
