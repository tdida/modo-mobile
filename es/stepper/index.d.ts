import * as React from 'react';
export interface StepperProps {
    prefixCls?: string;
    defaultValue?: number | string;
    value?: number | string;
    step?: number | string;
    min?: number | string;
    max?: number | string;
    disabled?: boolean;
    readOnly?: boolean;
    integer?: boolean;
    onChange?: (value: any) => void;
}
export default class Stepper extends React.PureComponent<StepperProps, any> {
    static defaultProps: {
        prefixCls: string;
        step: number;
        min: number;
        max: number;
        disabled: boolean;
        readOnly: boolean;
        integer: boolean;
    };
    static getDerivedStateFromProps(nextProps: StepperProps): {
        disabledReduce: boolean;
        disabledAdd: boolean;
    } | null;
    constructor(props: StepperProps);
    onReduce: () => void;
    onAdd: () => void;
    onChange: (val: any) => void;
    handleChange: (e: any) => void;
    handleInputBlur: () => void;
    render(): JSX.Element;
}
