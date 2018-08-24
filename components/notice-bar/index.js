import * as React from "react";
import Marquee from "./Marquee";
import Icon from "../icon";
function noop() { }
export default class NoticeBar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleHide = (time) => {
            const timer = setTimeout(() => {
                this.handleClose();
                clearTimeout(timer);
            }, time);
        };
        this.handleClose = () => {
            this.setState({
                closed: true
            });
            (this.props.onClick || noop)();
        };
        this.state = {
            closed: false
        };
    }
    componentDidMount() {
        const { duration } = this.props;
        if (duration) {
            this.handleHide(duration);
        }
    }
    render() {
        const { icon, prefixCls, action, children, mode, onClick } = this.props;
        const extraProps = {};
        let closeIcon = null;
        if (mode === "closable") {
            closeIcon = (React.createElement("div", { onClick: this.handleClose, className: `${prefixCls}-close-icon` }, action || React.createElement(Icon, { type: "close" })));
        }
        else {
            if (mode === "link") {
                closeIcon = (React.createElement("div", { className: `${prefixCls}-close-icon` }, action || React.createElement(Icon, { type: "right" })));
            }
            extraProps.onClick = onClick;
        }
        return this.state.closed ? null : (React.createElement("div", Object.assign({ className: prefixCls }, extraProps),
            React.createElement("div", { className: `${prefixCls}-icon` }, icon),
            React.createElement("div", { className: `${prefixCls}-content` },
                React.createElement(Marquee, { prefixCls: prefixCls, text: children })),
            closeIcon));
    }
}
NoticeBar.defaultProps = {
    prefixCls: "m-notice-bar",
    mode: "",
    duration: 0,
    icon: React.createElement(Icon, { type: "notification" }),
    onClick() { }
};
