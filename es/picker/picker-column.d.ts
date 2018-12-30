import * as React from 'react';
import { PickerData } from './PropsType';
export interface PickerColumnProps {
    prefixCls?: string;
    data: PickerData[];
    value?: string | number;
    defaultValue?: string | number;
    itemStyle?: React.CSSProperties;
    onValueChange?: (value?: any) => void;
    onScrollChange?: (value?: any) => void;
}
interface ScrollValueMap {
    [key: string]: any;
}
export default class PickerColumn extends React.Component<PickerColumnProps, any> {
    rootRef: any;
    maskRef: any;
    listRef: any;
    indicatorRef: any;
    itemHeight: number;
    scrollValue: number;
    scrollHanders: ScrollValueMap;
    constructor(props: PickerColumnProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: PickerColumnProps): void;
    shouldComponentUpdate(_nextProps: any, nextState: any): boolean;
    componentDidUpdate(): void;
    onSelect: (value: any, itemHeight: number, scrollTo: Function) => void;
    selectByIndex(index: number, itemHeight: number, zscrollTo: Function): void;
    scrollTo: (top: number) => void;
    scrollToWithoutAnimation: (top: number) => void;
    onScrollChange: () => void;
    computeChildIndex: (top: number, itemHeight: number, childrenLength: number) => number;
    scrollingComplete: () => void;
    fireValueChange: (value: any) => void;
    getValue(): string | number | undefined;
    render(): JSX.Element;
}
export {};
