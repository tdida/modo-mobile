var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from "react";
import classnames from "classnames";
import Item from "./ListItem";
export default class List extends React.PureComponent {
    render() {
        const _a = this.props, { prefixCls, children, className, style, title, extra } = _a, restProps = __rest(_a, ["prefixCls", "children", "className", "style", "title", "extra"]);
        const wrapCls = classnames(prefixCls, className);
        return (React.createElement("div", Object.assign({ className: wrapCls, style: style }, restProps),
            title || extra ? (React.createElement("div", { className: `${prefixCls}-header` },
                React.createElement("div", { className: `${prefixCls}-title` }, title),
                React.createElement("div", { className: `${prefixCls}-extra` }, extra))) : null,
            children ? (React.createElement("div", { className: `${prefixCls}-body` }, children)) : null));
    }
}
List.Item = Item;
List.defaultProps = {
    prefixCls: "m-list"
};
