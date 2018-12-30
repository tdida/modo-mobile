import * as React from 'react';
export interface AgreeProps {
    prefixCls?: string;
    disabled?: boolean;
    value?: boolean;
    defaultValue?: boolean;
    children?: React.ReactNode;
    className?: string;
    onChange?: (value: boolean) => void;
}
export default class Agree extends React.PureComponent<AgreeProps, any> {
    static defaultProps: {
        disabled: boolean;
        prefixCls: string;
    };
    static getDerivedStateFromProps(nextProps: AgreeProps): {
        value: boolean | undefined;
    } | undefined;
    constructor(props: AgreeProps);
    handleClick: () => void;
    render(): JSX.Element;
}
