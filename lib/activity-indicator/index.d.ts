import * as React from 'react';
export interface ActivityIndicatorProps {
    prefixCls?: string;
    type?: 'carousel' | 'roller';
    size?: number;
    color?: string;
    vertical?: boolean;
    children?: React.ReactNode;
}
export default class ActivityIndicator extends React.PureComponent<ActivityIndicatorProps, any> {
    static defaultProps: {
        type: string;
        vertical: boolean;
    };
    render(): JSX.Element;
}
