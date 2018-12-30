import * as React from 'react';
import createFromIconfontCN from './IconFont';
export interface CustomIconComponentProps {
    width: string | number;
    height: string | number;
    fill: string;
    viewBox?: string;
    className?: string;
    style?: React.CSSProperties;
    ['aria-hidden']?: string;
}
export interface IconProps {
    type?: string;
    className?: string;
    title?: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
    component?: React.ComponentType<CustomIconComponentProps>;
    viewBox?: string;
    spin?: boolean;
    style?: React.CSSProperties;
    svgStyle?: React.CSSProperties;
    svgClassName?: string;
    prefixCls?: string;
}
export interface IconComponent<P> extends React.SFC<P> {
    createFromIconfontCN: typeof createFromIconfontCN;
}
declare const _default: any;
export default _default;
