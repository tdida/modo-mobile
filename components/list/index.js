var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import classnames from 'classnames';
import * as React from 'react';
import Item from './ListItem';
export default class List extends React.PureComponent {
    render() {
        const _a = this.props, { prefixCls, children, className, style, title, extra } = _a, restProps = __rest(_a, ["prefixCls", "children", "className", "style", "title", "extra"]);
        const wrapCls = classnames(prefixCls, className);
        const headerNode = title || extra ? (<div className={`${prefixCls}-header`}>
          <div className={`${prefixCls}-title`}>{title}</div>
          <div className={`${prefixCls}-extra`}>{extra}</div>
        </div>) : null;
        return (<div className={wrapCls} style={style} {...restProps}>
        {headerNode}
        {children ? <div className={`${prefixCls}-body`}>{children}</div> : null}
      </div>);
    }
}
List.Item = Item;
List.defaultProps = {
    prefixCls: 'm-list',
};
