var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import classnames from "classnames";
import * as React from "react";
import Icon from "../icon";
const rxTwoCNChar = /^[\u4e00-\u9fa5]{2}$/;
const isTwoCNChar = rxTwoCNChar.test.bind(rxTwoCNChar);
function isString(str) {
    return typeof str === "string";
}
// Insert one space between two chinese characters automatically.
function insertSpace(child, needInserted) {
    // Check the child if is undefined or null.
    if (child == null) {
        return;
    }
    const SPACE = needInserted ? " " : "";
    // strictNullChecks oops.
    if (typeof child !== "string" &&
        typeof child !== "number" &&
        isString(child.type) &&
        isTwoCNChar(child.props.children)) {
        return React.cloneElement(child, {}, child.props.children.split("").join(SPACE));
    }
    if (typeof child === "string") {
        if (isTwoCNChar(child)) {
            child = child.split("").join(SPACE);
        }
        return React.createElement("span", null, child);
    }
    return child;
}
class Button extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.handleClick = e => {
            const { onClick } = this.props;
            if (onClick) {
                onClick(e);
            }
        };
    }
    isNeedInserted() {
        const { icon, children } = this.props;
        return React.Children.count(children) === 1 && !icon;
    }
    render() {
        const _a = this.props, { children, className, prefixCls, type, size, shape, inline, icon, loading, onClick } = _a, restProps = __rest(_a, ["children", "className", "prefixCls", "type", "size", "shape", "inline", "icon", "loading", "onClick"]);
        let sizeCls = "";
        switch (size) {
            case "large":
                sizeCls = "lg";
                break;
            case "small":
                sizeCls = "sm";
            default:
                break;
        }
        const iconType = loading ? "loading" : icon;
        const wrapCls = classnames(prefixCls, className, {
            [`${prefixCls}-${type}`]: type,
            [`${prefixCls}-${sizeCls}`]: sizeCls,
            [`${prefixCls}-${shape}`]: shape,
            [`${prefixCls}-inline`]: inline || shape,
            [`${prefixCls}-loading`]: loading,
            [`${prefixCls}-icon`]: !!iconType
        });
        const iconNode = iconType ? React.createElement(Icon, { type: iconType }) : null;
        const kids = children || children === 0
            ? React.Children.map(children, child => insertSpace(child, this.isNeedInserted()))
            : null;
        if ("href" in restProps) {
            return (React.createElement("a", Object.assign({}, restProps, { className: wrapCls, onClick: this.handleClick }),
                iconNode,
                kids));
        }
        else {
            const { htmlType } = restProps, otherProps = __rest(restProps, ["htmlType"]);
            return (React.createElement("button", Object.assign({}, otherProps, { type: htmlType || "button", className: wrapCls, onClick: this.handleClick }),
                iconNode,
                kids));
        }
    }
}
Button.defaultProps = {
    disabled: false,
    inline: false,
    loading: false,
    prefixCls: "m-button"
};
export default Button;
