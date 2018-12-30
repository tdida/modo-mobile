import * as React from 'react';
export interface MarqueeProps {
    prefixCls?: string;
    text: string;
    loop?: boolean;
    leading?: number;
    trailing?: number;
    className?: string;
    fps?: number;
    style?: React.CSSProperties;
}
export default class Marquee extends React.Component<MarqueeProps, any> {
    static defaultProps: {
        className: string;
        fps: number;
        leading: number;
        loop: boolean;
        text: string;
        trailing: number;
    };
    state: {
        animatedWidth: number;
        overflowWidth: number;
    };
    textRef: any;
    private _marqueeTimer;
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
    _startAnimation(): void;
    _measureText(): void;
}
