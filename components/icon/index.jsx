var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from 'react';
import classNames from 'classnames';
import createFromIconfontCN from './IconFont';
import { svgBaseProps } from './utils';
import warning from '../_util/warning';
const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_821530_icjpvt6k219.js',
});
const Icon = props => {
    const { style, className, type, component: Component, viewBox, spin, 
    // children
    children } = props, restProps = __rest(props, ["style", "className", "type", "component", "viewBox", "spin", "children"]);
    warning(Boolean(type || Component || children), 'Icon should have `type` prop or `component` prop or `children`.');
    const classString = classNames({
        [`m-icon`]: true,
        [`m-icon-${type}`]: Boolean(type),
    }, className);
    const svgClassString = classNames({
        [`m-icon-spin`]: !!spin || type === 'loading',
    });
    let innerNode;
    // component > children > type
    if (Component) {
        const innerSvgProps = Object.assign({}, svgBaseProps, { className: svgClassString, viewBox });
        if (!viewBox) {
            delete innerSvgProps.viewBox;
        }
        innerNode = <Component {...innerSvgProps}>{children}</Component>;
    }
    if (children) {
        warning(Boolean(viewBox) ||
            (React.Children.count(children) === 1 && React.Children.only(children).type === 'use'), 'Make sure that you provide correct `viewBox`' +
            ' prop (default `0 0 1024 1024`) to the icon.');
        const innerSvgProps = Object.assign({}, svgBaseProps, { className: svgClassString });
        innerNode = (<svg {...innerSvgProps} viewBox={viewBox}>
        {children}
      </svg>);
    }
    if (typeof type === 'string') {
        const iconFontCls = classNames({
            [`m-icon-${type}`]: type,
            [`m-icon-spin`]: !!spin || type === 'loading',
        });
        return <IconFont className={iconFontCls} style={style} type={`icon-${type}`}/>;
    }
    return (<i {...restProps} style={style} className={classString}>
      {innerNode}
    </i>);
};
Icon.displayName = 'Icon';
Icon.createFromIconfontCN = createFromIconfontCN;
export default Icon;
