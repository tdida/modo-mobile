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
import Icon from "../icon";
export default class ListItem extends React.PureComponent {
    render() {
        const _a = this.props, { prefixCls, children, className, style, disabled, align, title, brief, wrap, arrow, extra } = _a, restProps = __rest(_a, ["prefixCls", "children", "className", "style", "disabled", "align", "title", "brief", "wrap", "arrow", "extra"]);
        const wrapCls = classnames(`${prefixCls}`, className, {
            [`${prefixCls}-disabled`]: disabled,
            [`${prefixCls}-${align}`]: align
        });
        const contentCls = classnames(`${prefixCls}-content`, {
            [`${prefixCls}-content-wrap`]: wrap
        });
        const arrowCls = classnames(`${prefixCls}-arrow`, {
            [`${prefixCls}-arrow-${arrow}`]: arrow
        });
        return (React.createElement("div", Object.assign({ className: wrapCls, style: style }, restProps),
            React.createElement("div", { className: `${prefixCls}-inner` },
                extra ? (React.createElement("div", { className: `${prefixCls}-extra` }, typeof extra === "string" ? React.createElement("img", { src: extra }) : extra)) : null,
                React.createElement("div", { className: `${prefixCls}-label` },
                    React.createElement("div", { className: `${prefixCls}-title` }, title),
                    brief ? React.createElement("div", { className: `${prefixCls}-brief` }, brief) : null),
                React.createElement("div", { className: contentCls }, children !== undefined && children),
                arrow && (React.createElement("div", { className: arrowCls, "aria-hidden": "true" },
                    React.createElement(Icon, { type: "right" }))))));
    }
}
ListItem.defaultProps = {
    prefixCls: "m-list-item",
    align: "right",
    arrow: "right"
};
