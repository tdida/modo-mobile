/*
 * https://github.com/jasonslyvia/react-marquee
 * remove PC
 * support React Element for text prop
*/
import * as React from "react";
import * as ReactDOM from "react-dom";
export default class Marquee extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            animatedWidth: 0,
            overflowWidth: 0
        };
        // tslint:disable-next-line:variable-name
        this._marqueeTimer = 0;
    }
    componentDidMount() {
        this._measureText();
        this._startAnimation();
    }
    componentDidUpdate() {
        this._measureText();
        if (!this._marqueeTimer) {
            this._startAnimation();
        }
    }
    componentWillUnmount() {
        clearTimeout(this._marqueeTimer);
    }
    render() {
        const { prefixCls, className, text } = this.props;
        const style = Object.assign({ position: "relative", right: this.state.animatedWidth, whiteSpace: "nowrap", display: "inline-block" }, this.props.style);
        return (React.createElement("div", { className: `${prefixCls}-marquee-wrap ${className}`, style: { overflow: "hidden" }, role: "marquee" },
            React.createElement("div", { ref: el => (this.textRef = el), className: `${prefixCls}-marquee`, style: style }, text)));
    }
    _startAnimation() {
        if (this._marqueeTimer) {
            window.clearTimeout(this._marqueeTimer);
        }
        const fps = this.props.fps;
        const TIMEOUT = (1 / fps) * 1000;
        const isLeading = this.state.animatedWidth === 0;
        const timeout = isLeading ? this.props.leading : TIMEOUT;
        const animate = () => {
            const { overflowWidth } = this.state;
            let animatedWidth = this.state.animatedWidth + 1;
            const isRoundOver = animatedWidth > overflowWidth;
            if (isRoundOver) {
                if (this.props.loop) {
                    animatedWidth = 0;
                }
                else {
                    return;
                }
            }
            if (isRoundOver && this.props.trailing) {
                this._marqueeTimer = window.setTimeout(() => {
                    this.setState({
                        animatedWidth
                    });
                    this._marqueeTimer = window.setTimeout(animate, TIMEOUT);
                }, this.props.trailing);
            }
            else {
                this.setState({
                    animatedWidth
                });
                this._marqueeTimer = window.setTimeout(animate, TIMEOUT);
            }
        };
        if (this.state.overflowWidth !== 0) {
            this._marqueeTimer = window.setTimeout(animate, timeout);
        }
    }
    _measureText() {
        const container = ReactDOM.findDOMNode(this);
        const node = this.textRef;
        if (container && node) {
            const containerWidth = container.offsetWidth;
            const textWidth = node.offsetWidth;
            const overflowWidth = textWidth - containerWidth;
            if (overflowWidth !== this.state.overflowWidth) {
                this.setState({
                    overflowWidth
                });
            }
        }
    }
}
Marquee.defaultProps = {
    text: "",
    loop: true,
    leading: 500,
    trailing: 800,
    fps: 30,
    className: ""
};
