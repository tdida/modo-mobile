import * as React from 'react';
import { PickerData } from './PropsType';
export interface PickerViewProps {
    prefixCls?: string;
    data: PickerData[] | PickerData[][];
    value?: Array<string | number>;
    cols: number;
    cascade?: boolean;
    onChange?: (value: Array<string | number>) => void;
    onColumnChange?: (value: any, index: number) => void;
}
export default class PickerView extends React.Component<PickerViewProps, any> {
    static defaultProps: {
        prefixCls: string;
        cascade: boolean;
    };
    state: {
        value: (string | number)[];
    };
    componentWillReceiveProps(nextProps: PickerViewProps): void;
    onValueChange: (index: number, val: any) => void;
    getColumn(): any;
    render(): JSX.Element;
}
